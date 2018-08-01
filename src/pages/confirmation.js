import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Confirmation from 'components/Confirmation'

const ConfirmationPage = props => (
  <div>
    <Helmet>
      <title>{`Confirmation | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulConfirmation.metaDescription}
      />
    </Helmet>
    <Confirmation data={props.data} />
  </div>
)

ConfirmationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ConfirmationPage

export const newsletterQuery = graphql`
  query confirmationPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulConfirmation(slug: { eq: "confirmation" }) {
      title
      slug
      metaDescription
      headerBackgroundImage {
        file {
          url
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
