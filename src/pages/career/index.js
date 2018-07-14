import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Career from 'components/Career'

const CareerPage = props => (
  <div>
    <Helmet
      title={`Careers | ${props.data.site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content:
            'Job Board. We are Cloud Consultants looking for career oriented workers for a growing business. Call today 1-888-959-2825',
        },
      ]}
    />

    <Career data={props.data} />
  </div>
)

CareerPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CareerPage

export const careerPageQuery = graphql`
  query careerPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCareer(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [title] }
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
