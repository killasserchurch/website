import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Baptism from 'components/Baptism'

const BaptismPage = props => (
  <div>
    <Helmet>
      <title>{`Baptism | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulBaptism.metaDescription}
      />
    </Helmet>
    <Baptism data={props.data} />
  </div>
)

BaptismPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BaptismPage

export const newsletterQuery = graphql`
  query baptismPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBaptism(slug: { eq: "baptism" }) {
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
