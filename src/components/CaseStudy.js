import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import CaseStudyPost from './CaseStudyPost'

const CaseStudy = props => (
  <div id="main" className="alt">
    <section>
      <div className="inner">
        <header>
          <h1>Case Studies</h1>
        </header>
        <h3>
          Showcasing {props.data.allContentfulCaseStudy.totalCount} Iron Cove
          Client Stories
        </h3>
        <ul className="action">
          {props.data.allContentfulCaseStudy.edges.map(edge => (
            <CaseStudyPost key={edge.node.slug} node={edge.node} />
          ))}
        </ul>
      </div>
    </section>
  </div>
)

CaseStudy.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CaseStudy
