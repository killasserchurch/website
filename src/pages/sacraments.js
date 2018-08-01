import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies

// components
import Sacraments from 'components/Sacraments'

class SacramentsPage extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>

        <Sacraments data={this.props.data} />
      </div>
    )
  }
}

SacramentsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SacramentsPage

export const sacramentsPageQuery = graphql`
  query SacramentsPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    contentfulSacraments(slug: { eq: "sacraments" }) {
      title
      slug
      metaDescription
      bannerTitle
      bannerText {
        childMarkdownRemark {
          html
        }
      }
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
