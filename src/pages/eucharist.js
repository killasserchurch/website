import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Eucharist from 'components/Eucharist'

const EucharistPage = props => (
  <div>
    <Helmet>
      <title>{`Eucharist | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulEucharist.metaDescription}
      />
    </Helmet>
    <Eucharist data={props.data} />
  </div>
)

EucharistPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EucharistPage

export const eucharistQuery = graphql`
  query eucharistPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulEucharist(slug: { eq: "eucharist" }) {
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
