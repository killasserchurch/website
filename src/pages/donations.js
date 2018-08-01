import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Donations from 'components/Donations'

const DonationsPage = props => (
  <div>
    <Helmet>
      <title>{`Donations | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulDonations.metaDescription}
      />
    </Helmet>
    <Donations data={props.data} />
  </div>
)

DonationsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DonationsPage

export const newsletterQuery = graphql`
  query donationsPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulDonations(slug: { eq: "donations" }) {
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
