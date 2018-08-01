import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Confession from 'components/Confession'

const ConfessionPage = props => (
  <div>
    <Helmet>
      <title>{`Confession | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulConfession.metaDescription}
      />
    </Helmet>
    <Confession data={props.data} />
  </div>
)

ConfessionPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ConfessionPage

export const confessionQuery = graphql`
  query confessionPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulConfession(slug: { eq: "confession" }) {
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
