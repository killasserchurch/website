import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import { Boxes } from './Elements'
import WorkflowPost from './WorkflowPost'

const Workflow = props => (
  <div id="main" className="alt">
    <section>
      <div className="inner">
        <header>
          <h1>Workflow</h1>
        </header>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          consequatur impedit corrupti officiis molestias velit voluptatum
          inventore recusandae repudiandae labore culpa, fugit cumque vitae
          aliquam modi! Minus odio officia nostrum!
        </p> */}
        <Boxes className="action boxes">
          {props.data.allContentfulWorkflow.edges.map(edge => (
            <WorkflowPost key={edge.node.slug} node={edge.node} />
          ))}
        </Boxes>
      </div>
    </section>
  </div>
)

Workflow.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Workflow
