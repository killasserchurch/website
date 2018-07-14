import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'
import Link from 'gatsby-link'

const CopyrightWrapper = styled.section`
  background-color: #fff;
  margin: 0;
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;

  p {
    margin: 0;
    span {
      padding: 0 0.5rem;
    }
  }

  a {
    color: #000;
  }
`
const FooterCopyright = () => (
  <CopyrightWrapper>
    <p className="copyright-large">
      <span>&copy; 2018</span> |{' '}
      <span>
        <Link to="/" title="Iron Cove Solutions Home">
          Iron Cove Solutions
        </Link>
      </span>
      |{' '}
      <span>
        <Link to="/privacy" title="Privacy">
          Privacy
        </Link>
      </span>{' '}
      | <span>Simplifying Cloud-Based Intention</span>
    </p>
    <p className="copyright-mobile">
      <Link to="/" title="Iron Cove Solutions Home" className="fa fa-home">
        <span>Home</span>
      </Link>
      <a
        className="fa fa-envelope"
        title="Iron Cove Solutions Email"
        href="mailto:sales@ironcovesolutions.com?subject=Interested in Learning more about Iron Cove Solutions"
      >
        <span>Email</span>
      </a>
      <a
        className="fa fa-phone"
        href="tel:1-888-959-2825"
        title="Iron Cove Solutions Phone"
      >
        <span>Call</span>
      </a>
    </p>
  </CopyrightWrapper>
)

export default FooterCopyright
