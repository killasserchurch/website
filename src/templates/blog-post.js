import React, { Component } from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import CustomLink from 'components/CustomLink'
import SEO from 'components/SEO'

class BlogPost extends Component {
  render() {
    const {
      title,
      slug,
      metaDescription,
      body,
      featuredImage,
    } = this.props.data.contentfulBlog
    // const postNode = body.childMarkdownRemark
    // const post = postNode.html
    const postNode = this.props.data.contentfulBlog

    return (
      <div>
        <Helmet
          title={`${title} | ${this.props.data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
          ]}
        />
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div id="main">
          <section id="section-one">
            <div className="inner">
              <header>
                <h1 style={{ color: 'antiquewhite' }}>{title}</h1>
              </header>
              {featuredImage ? (
                <img src={featuredImage.file.url} alt={title} />
              ) : (
                undefined
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html: body.childMarkdownRemark.html,
                }}
              />
            </div>
          </section>
          <section>
            <CustomLink whereTo="/blog" whereToText="Back to Blog List" />
          </section>
          <hr />
        </div>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      metaDescription
      body {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        file {
          url
        }
      }
    }
  }
`
