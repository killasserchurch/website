import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Funeral from 'components/Funeral'

const FuneralPage = props => (
  <div>
    <Helmet>
      <title>{`Funeral | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulFuneral.metaDescription}
      />
    </Helmet>
    <Funeral data={props.data} />
  </div>
)

FuneralPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default FuneralPage

export const funeralQuery = graphql`
  query funeralPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulFuneral(slug: { eq: "funeral" }) {
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
