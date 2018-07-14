import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Workflow from 'components/Workflow'

const WorkflowPage = props => (
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

    <Workflow data={props.data} />
  </div>
)

WorkflowPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WorkflowPage

export const workflowPageQuery = graphql`
  query workflowPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulWorkflow(sort: { fields: [title] }) {
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
