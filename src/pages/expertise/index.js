import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Expertise from 'components/Expertise'

const ExpertisePage = props => (
  <div>
    <Helmet
      title={`Expertise | ${props.data.site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: 'Description for Expertise',
        },
      ]}
    />

    <div id="main" className="alt">
      <section>
        <Expertise data={props.data} />
      </section>
    </div>
  </div>
)

ExpertisePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ExpertisePage

export const expertisePageQuery = graphql`
  query expertisePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulExpertise(sort: { fields: [title] }) {
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
