import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { Box } from './Elements'

const TechnologyPost = ({ node }) => (
  <Box>
    <Link to={`/technology/${node.slug}`} title={node.title}>
      <img src={node.featuredImage.file.url} alt={node.title} />
      <div>
        <h2>{node.title}</h2>
      </div>
    </Link>
  </Box>
)

TechnologyPost.propTypes = {
  node: PropTypes.object.isRequired,
}

export default TechnologyPost
