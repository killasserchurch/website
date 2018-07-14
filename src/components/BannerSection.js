import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BannerSectionWrapper = styled.div`
  //background-color: #fff;
  border: 1px solid #fff;
  text-align: center;
  //color: #242943;
  color: #fff;
  font-family: 'Ruda', sans-serif;
  font-size: 2rem;
  padding: 1rem 2rem;
  letter-spacing: 0.3rem;
  margin: -1rem 0 2rem 0;
`
const BannerSection = props => (
  <BannerSectionWrapper>{props.sectionContent}</BannerSectionWrapper>
)

BannerSection.propTypes = {
  sectionContent: PropTypes.string.isRequired,
}

export default BannerSection
