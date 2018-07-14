import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'
import styled from 'styled-components'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Card, CardTitle, CardContent } from 'components/Elements/'
import featuredImgBg from '../assets/images/cityscape.jpg'

const CaseStudyPost = ({ node }) => (
  <CaseStudyCard>
    <Link to={`/case-studies/${node.slug}`} title={node.title}>
      <section>
        <div>
          <div>
            <h2 style={{ color: '#d7d7d7' }}>{node.title}</h2>
            <button className="button">READ</button>
          </div>
        </div>
      </section>
    </Link>
    <CardTitle>
      <div className="card-calendar">
        <div>
          <i className="fa fa-calendar" />
        </div>
      </div>
      <div className="pub-date">
        <h2>
          Publish Date: {moment(node.publishDate).format('MMMM Do, YYYY')}
        </h2>
      </div>
    </CardTitle>
    <CardContent>
      {/* <p>{node.body.childMarkdownRemark.excerpt}</p> */}
    </CardContent>
  </CaseStudyCard>
)

CaseStudyPost.propTypes = {
  node: PropTypes.object.isRequired,
}

export default CaseStudyPost

const CaseStudyCard = Card.extend`
  a:link {
    section {
      background-image: url(${featuredImgBg});
    }
  }
`
