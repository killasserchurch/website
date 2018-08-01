import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Marriage from 'components/Marriage'

const MarriagePage = props => (
  <div>
    <Helmet>
      <title>{`Marriage | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulMarriage.metaDescription}
      />
    </Helmet>
    <Marriage data={props.data} />
  </div>
)

MarriagePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MarriagePage

export const marriageQuery = graphql`
  query marriagePageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulMarriage(slug: { eq: "marriage" }) {
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
