import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies

// components
import Home from 'components/Home'

class HomePage extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>

        <Home data={this.props.data} />
      </div>
    )
  }
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlog(
      limit: 3
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 150)
            }
          }
          featuredImage {
            resolutions(width: 300, height: 300) {
              src
            }
          }
        }
      }
    }
    contentfulHome(slug: { eq: "home" }) {
      title
      slug
      metaDescription
      bannerTitle
      bannerH2
      bannerH3
      boxOneHeading
      boxOneDescription {
        childMarkdownRemark {
          html
        }
      }
      boxOneLink
      boxTwoHeading
      boxTwoDescription {
        childMarkdownRemark {
          html
        }
      }
      boxTwoLink
      boxThreeHeading
      boxThreeDescription {
        childMarkdownRemark {
          html
        }
      }
      boxThreeLink
      boxFourHeading
      boxFourDescription {
        childMarkdownRemark {
          html
        }
      }
      boxFourLink
      boxFiveHeading
      boxFiveDescription {
        childMarkdownRemark {
          html
        }
      }
      boxFiveLink
      boxSixHeading
      boxSixDescription {
        childMarkdownRemark {
          html
        }
      }
      boxSixLink
    }
  }
`
