import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Newsletter from 'components/Newsletter'

const NewsletterPage = props => (
  <div>
    <Helmet>
      <title>{`Newsletter | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulNewsletter.metaDescription}
      />
    </Helmet>
    <Newsletter data={props.data} />
  </div>
)

NewsletterPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default NewsletterPage

export const newsletterQuery = graphql`
  query newsletterPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulNewsletter(slug: { eq: "newsletter" }) {
      title
      slug
      metaDescription
      headerBackgroundImage {
        file {
          url
        }
      }
      sectionTwoHeading
      sectionTwoContentLeft {
        childMarkdownRemark {
          html
        }
      }
      sectionTwoContentMiddle {
        childMarkdownRemark {
          html
        }
      }
      sectionTwoContentRight {
        childMarkdownRemark {
          html
        }
      }
      sectionFourHeading
      sectionFourContent {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
