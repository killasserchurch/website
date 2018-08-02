import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Photos from 'components/Photos'

const PhotosPage = props => (
  <div>
    <Helmet>
      <title>{`Photos | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulPhotos.metaDescription}
      />
    </Helmet>
    <Photos data={props.data} />
  </div>
)

PhotosPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PhotosPage

export const photosQuery = graphql`
  query photosPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPhotos(slug: { eq: "photos" }) {
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
