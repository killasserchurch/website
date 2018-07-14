import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { Box } from './Elements'

const VideoPost = ({ node }) => (
  <Box>
    <Link to={`/video/${node.slug}`} title={node.title}>
      {/* <img src={node.featuredImage.file.url} alt={node.title} /> */}
      {/* <div> */}
      <h2>{node.title}</h2>
      <p>
        <i className={`fa ${node.fontAwesomeCode} fa-5x`} aria-hidden="true" />
      </p>
      {/* </div> */}
    </Link>
  </Box>
)

VideoPost.propTypes = {
  node: PropTypes.object.isRequired,
}

export default VideoPost
