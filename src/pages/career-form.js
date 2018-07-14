import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import config from '../data/SiteConfig'
import CareerForm from 'components/CareerForm'

const CareerFormPage = props => (
  <div>
    <Helmet>
      <title>{`Career Form | ${config.siteTitle} }`}</title>
      <meta
        name="description"
        content="Careers Application Page for Iron Cove Solutions"
      />
    </Helmet>

    <CareerForm data={props.data} />
  </div>
)

CareerFormPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CareerFormPage

export const aboutQuery = graphql`
  query careerFormPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
