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
          <a
            href="https://ironcovesolutions.com/rss.xml"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="icon alt fa-rss"
          >
            <span className="label">RSS</span>
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer nofollow"
            href="https://twitter.com/Ironcove"
            target="_blank"
            className="icon alt fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/IronCoveSolutions"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="icon alt fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/user/ironcovesolutions"
            rel="noopener noreferrer nofollow"
            target="_blank"
            className="icon alt fa-youtube"
          >
            <span className="label">Youtube</span>
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer nofollow"
            target="_blank"
            href="https://www.linkedin.com/company/iron-cove-solutions/"
            className="icon alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>

        <li>
          <a
            rel="noopener noreferrer nofollow"
            target="_blank"
            href="https://plus.google.com/+Ironcovesolutions"
            className="icon alt fa-google-plus"
          >
            <span className="label">Google+</span>
          </a>
        </li>
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
          <Link to="/career" title="Careers">
            <span className="label">Careers</span>
          </Link>
        </li>
        <li>
          <Link to="/case-studies" title="Case Studies">
            <span className="label">Case Studies</span>
          </Link>
        </li>
        <li>
          <a
            rel="noopener noreferrer nofollow"
            target="_blank"
            href="https://ironcove.teamwork.com"
            title="Project Management"
          >
            <span className="label">Project Management</span>
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer nofollow"
            target="_blank"
            href="https://support.ironcovesolutions.com/hc/en-us"
            title="Support"
          >
            <span className="label">Support</span>
          </a>
        </li>
        <li>
          <Link to="/video" title="Videos">
            <span className="label">Video</span>
          </Link>
        </li>
        <li>
          <Link to="/workflow" title="Workflows">
            <span className="label">Workflow</span>
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
