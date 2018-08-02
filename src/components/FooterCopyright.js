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
        <Link to="/" title="Killasser Parish">
          Killasser Parish
        </Link>
      </span>
    </p>
    <p className="copyright-mobile">
      <Link to="/" title="Killasser Parish" className="fa fa-home">
        <span>Home</span>
      </Link>
      <a
        className="fa fa-envelope"
        title="Killasser Parish Email"
        href="mailto:fatherjohn.com?subject=Interested in Killasser Parish"
      >
        <span>Email</span>
      </a>
      <a
        className="fa fa-phone"
        href="tel:087-9548532"
        title="Killasser Parish Phone"
      >
        <span>Call</span>
      </a>
    </p>
  </CopyrightWrapper>
)

export default FooterCopyright
