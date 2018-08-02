import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import PastoralCouncil from 'components/PastoralCouncil'

const PastoralCouncilPage = props => (
  <div>
    <Helmet>
      <title>{`PastoralCouncil | ${props.data.site.siteMetadata.title}`}</title>
      {/* <meta
        name="description"
        content={props.data.contentfulPastoralCouncil.metaDescription}
      /> */}
    </Helmet>
    <PastoralCouncil data={props.data} />
  </div>
)

PastoralCouncilPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PastoralCouncilPage

export const pastoralCouncil = graphql`
  query pastoralCouncilPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulPastoralCouncil(slug: { eq: "pastoralcouncil" }) {
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
