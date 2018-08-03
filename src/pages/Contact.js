import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'

const ContactWrapper = styled.section`
  background-color: #252a43;
`
const ContactPage = () => (
  <ContactWrapper id="contact">
    <div className="inner">
      <h1>Contact</h1>
    </div>
  </ContactWrapper>
)

export default ContactPage
