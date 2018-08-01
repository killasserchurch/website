import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import BlogPost from './BlogPost'

const Blog = props => (
  <div id="main">
    <section id="blog">
      <div className="inner">
        <header>
          <h1>Current Events</h1>
        </header>
        <div className="action">
          {props.data.allContentfulBlog.edges.map(edge => (
            <BlogPost key={edge.node.slug} node={edge.node} />
          ))}
        </div>
      </div>
    </section>
  </div>
)

Blog.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Blog
