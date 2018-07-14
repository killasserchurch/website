import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { Box } from './Elements'

const ExpertisePost = ({ node }) => (
  <Box>
    <Link to={`/expertise/${node.slug}`} title={node.title}>
      {node.featuredImage !== null ? (
        <img src={node.featuredImage.file.url} alt={node.title} />
      ) : (
        undefined
      )}
      <div>
        <h2>{node.title}</h2>
      </div>
    </Link>
  </Box>
)

ExpertisePost.propTypes = {
  node: PropTypes.object.isRequired,
}

export default ExpertisePost
