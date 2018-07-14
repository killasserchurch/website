import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Blog from 'components/Blog'

const BlogPage = props => (
  <div>
    <Helmet
      title={`Blog | ${props.data.site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: props.data.site.siteMetadata.description,
        },
      ]}
    />
    <Blog data={props.data} />
  </div>
)

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPage

export const blogPageQuery = graphql`
  query blogPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlog(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          title
          slug
          publishDate
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          featuredImage {
            responsiveResolution(width: 300, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`
