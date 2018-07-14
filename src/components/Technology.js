import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import { Boxes } from './Elements'
import TechnologyPost from './TechnologyPost'

const Technology = props => (
  <div id="main" className="alt">
    <section>
      <div className="inner">
        <header>
          <h1>Technology</h1>
        </header>
        <p>
          We have strong relationships with leading 3rd party technology vendors
          and deep expertise in systems integration. Partnering with companies
          like Microsoft, HP, Google, Auth0 and Okta we specialize in delivering
          modern cloud-based solutions to varied industries and businesses
          across the globe.
        </p>
        <Boxes className="action boxes">
          {props.data.allContentfulTechnology.edges.map(edge => (
            <TechnologyPost key={edge.node.slug} node={edge.node} />
          ))}
        </Boxes>
      </div>
    </section>
  </div>
)

Technology.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Technology
