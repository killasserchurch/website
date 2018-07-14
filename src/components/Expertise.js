import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import { Boxes } from './Elements'
import ExpertisePost from './ExpertisePost'

const Expertise = props => (
  <div id="main" className="alt">
    <section>
      <div className="inner">
        <header>
          <h1>Expertise</h1>
        </header>
        <p>
          <strong>Iron Cove</strong> provides comprehensive end-to-end
          enterprise solutions across a wide range of platforms and devices. Our
          key solutions include consulting, development, implementation and
          support. We have a dedicated group of skilled professionals using
          modern tools to help provide our clients state of the art
          technological solutions.
        </p>
        <Boxes className="action boxes">
          {props.data.allContentfulExpertise.edges.map(edge => (
            <ExpertisePost key={edge.node.slug} node={edge.node} />
          ))}
        </Boxes>
      </div>
    </section>
  </div>
)

Expertise.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Expertise
