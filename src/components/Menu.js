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
            title="Killasser Parish Home"
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
          <Link onClick={props.onToggleMenu} to="/masses" title="Masses">
            Masses
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/blog" title="Events">
            Events
          </Link>
        </li>
        <li>
          <Link
            onClick={props.onToggleMenu}
            to="/newsletter"
            title="Newsletter"
          >
            Newsletter
          </Link>
        </li>
        <li>
          <Link
            onClick={props.onToggleMenu}
            to="/sacraments"
            title="Sacraments"
          >
            Sacraments
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
