import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #3770b7;
  .icons {
    display: flex;
    justify-content: center;
  }
  .text-links {
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    a {
      color: #fff;
    }
  }
`
const Footer = () => (
  <FooterWrapper id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <Link
            to="/"
            title="Iron Cove Solutions Home"
            className="icon alt fa-home"
          >
            <span className="label">Home</span>
          </Link>
        </li>
      </ul>
      <ul className="text-links">
        <li>
          <Link to="/about" title="About">
            <span className="label">About</span>
          </Link>
        </li>
        <li>
          <Link to="/sacraments" title="Sacraments">
            <span className="label">Sacraments</span>
          </Link>
        </li>
        <li>
          <Link to="/newsletter" title="Newsletter">
            <span className="label">Newsletter</span>
          </Link>
        </li>
        <li>
          <Link to="/sacraments" title="Sacraments">
            <span className="label">Sacraments</span>
          </Link>
        </li>
        <li>
          <Link to="/#top" title="Top of Page">
            <span className="label">Top</span>
          </Link>
        </li>
      </ul>
    </div>
  </FooterWrapper>
)

export default Footer
