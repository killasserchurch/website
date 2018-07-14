import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Technology from 'components/Technology'

const TechnologyPage = props => (
  <div>
    <Helmet
      title={`Technology | ${props.data.site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content:
            'Iron Cove Solutions is a cloud based consulting firm. We help companies deliver a return on cloud usage by applying best practices. Call Today 1-888-959-2825',
        },
      ]}
    />

    <Technology data={props.data} />
  </div>
)

TechnologyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TechnologyPage

export const technologyPageQuery = graphql`
  query technologyPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulTechnology(
      sort: { fields: [title] }
      filter: { plan: { eq: null } }
    ) {
      edges {
        node {
          title
          slug
          metaDescription
          featuredImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`
