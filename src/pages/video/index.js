import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Video from 'components/Video'

const VideoPage = props => (
  <div>
    <Helmet
      title={`Video | ${props.data.site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content:
            'Iron Cove Solutions is a cloud based consulting firm. We help companies deliver a return on cloud usage by applying best practices. Call Today 1-888-959-2825',
        },
      ]}
    />

    <Video data={props.data} />
  </div>
)

VideoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default VideoPage

export const videoPageQuery = graphql`
  query videoPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulVideo(sort: { fields: [title] }) {
      edges {
        node {
          title
          slug
          metaDescription
          fontAwesomeCode
        }
      }
    }
  }
`
