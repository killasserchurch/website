import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import CareerPost from './CareerPost'
import { Boxes } from 'components/Elements'

const Career = props => (
  <div id="main" className="alt">
    <section>
      <div className="inner">
        <header>
          <h1>Careers</h1>
        </header>
        <p>
          What&apos;s a career at Iron Cove Solutions all about? Helping
          Companies find solutions through technology. Since we opened our doors
          almost 10 years ago, our singular focus has been supporting each
          other, so we can best serve our customers. It&apos;s a simple idea
          that leads to amazing careers for those who choose Iron Cove
          Solutions.
        </p>
        <p>
          <strong>Iron Cove Solutions</strong> seeks and values people of all
          backgrounds because every employee, customer and business partner is
          important. Iron Cove Solutions is proud to be an Equal Opportunity
          Employer. All qualified applicants will receive consideration for
          employment without regard to age, race, color, religion, sex, national
          origin, sexual orientation, gender identity or protected veteran
          status and will not be discriminated against on the basis of
          disability. If you have any difficulty using our online system and you
          need an accommodation due to a disability, you may use this
          alternative email address to contact us about your interest in
          employment.
        </p>
        <h2>Recent Jobs</h2>
        <Boxes className="action boxes">
          {props.data.allContentfulCareer.edges.map(edge => (
            <CareerPost key={edge.node.slug} node={edge.node} />
          ))}
        </Boxes>
      </div>
    </section>
  </div>
)

Career.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Career
