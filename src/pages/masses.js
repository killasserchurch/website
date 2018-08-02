import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Masses from 'components/Masses'

const MassesPage = props => (
  <div>
    <Helmet>
      <title>{`Masses | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulMasses.metaDescription}
      />
    </Helmet>
    <Masses data={props.data} />
  </div>
)

MassesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MassesPage

export const massesQuery = graphql`
  query massesPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulMasses(slug: { eq: "masses" }) {
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
