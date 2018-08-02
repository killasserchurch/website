import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Links from 'components/Links'

const LinksPage = props => (
  <div>
    <Helmet>
      <title>{`Links | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulLinks.metaDescription}
      />
    </Helmet>
    <Links data={props.data} />
  </div>
)

LinksPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LinksPage

export const linksQuery = graphql`
  query linksPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulLinks(slug: { eq: "links" }) {
      title
      slug
      metaDescription
      headerBackgroundImage {
        file {
          url
        }
      }
      sectionFourHeading
      sectionFourContent {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
