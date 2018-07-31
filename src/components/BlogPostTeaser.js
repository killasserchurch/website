import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import icsLogoBg from '../assets/images/300x300-church-family.jpg'

const BlogPostTeaser = ({ node }) => (
  <div className="item">
    {node.featuredImage === null ? (
      <Link to={`/blog/${node.slug}`} style={{ borderBottom: 'none' }}>
        <img src={icsLogoBg} alt="Ironcove Solutions logo" />
      </Link>
    ) : (
      <Link to={`/blog/${node.slug}`} style={{ borderBottom: 'none' }}>
        <img src={node.featuredImage.resolutions.src} alt={node.title} />
      </Link>
    )}
    <p style={{ marginBottom: '1rem' }}>
      {node.body.childMarkdownRemark.excerpt}
    </p>
    <p style={{ textAlign: 'center', paddingBottom: '1rem' }}>
      <Link
        className="button"
        to={`/blog/${node.slug}`}
        style={{ borderBottom: 'none' }}
      >
        READ MORE
      </Link>
    </p>
  </div>
)

BlogPostTeaser.propTypes = {
  node: PropTypes.object.isRequired,
}

export default BlogPostTeaser
