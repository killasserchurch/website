import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import CaseStudy from 'components/CaseStudy'

const CaseStudyPage = props => (
  <div>
    <Helmet
      title={`Case Studies | ${props.data.site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content:
            'Case Study page of the Iron Cove Solutions deployments of Okta and Microsoft Office 365. Call Today 1-888-959-2825',
        },
      ]}
    />

    <CaseStudy data={props.data} />
  </div>
)

CaseStudyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CaseStudyPage

export const caseStudyPageQuery = graphql`
  query caseStudyPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulCaseStudy(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
