import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { Box } from './Elements'

const CareerPost = ({ node }) => (
  <Box>
    <Link to={`/career/${node.slug}`} title={node.title}>
      <img src={node.featuredImage.file.url} alt={node.title} />
      <div>
        <h2>{node.title}</h2>
      </div>
    </Link>
  </Box>
)

CareerPost.propTypes = {
  node: PropTypes.object.isRequired,
}

export default CareerPost
