import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link
            onClick={props.onToggleMenu}
            to="/"
            title="Iron Cove Solutions Home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/about" title="About">
            About
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/career" title="Career">
            Careers
          </Link>
        </li>
        <li>
          <Link
            onClick={props.onToggleMenu}
            to="/case-studies"
            title="case-studies"
          >
            Case Studies
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/expertise" title="expertise">
            Expertise
          </Link>
        </li>
        <li>
          <a
            onClick={props.onToggleMenu}
            title="Support"
            href="https://support.ironcovesolutions.com/hc/en-us"
            rel="nofollow"
          >
            Support
          </a>
        </li>
        <li>
          <Link
            onClick={props.onToggleMenu}
            to="/technology"
            title="technology"
          >
            Technology
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/video" title="Videos">
            Video
          </Link>
        </li>
        <li>
          <Link
            onClick={props.onToggleMenu}
            to="/#aboveContact"
            title="contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
