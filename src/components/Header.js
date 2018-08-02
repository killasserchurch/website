import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import PropTypes from 'prop-types'

// images

const Header = props => (
  <div>
    <header id="header" className="alt">
      <Link to="/" className="logo" title="Iron Cove Solutions">
        <h1 style={{ color: '#000000', fontSize: '2.2rem' }}>
          Killasser Parish
        </h1>
      </Link>
      <nav>
        <ul className="flex-nav">
          {/* <li> */}
          {/*   <Link to="/masses" title="Masses"> */}
          {/*    Masses  */}
          {/*   </Link> */}
          {/* </li> */}
          <li>
            <Link to="/about" title="Newsletter">
              About
            </Link>
          </li>
          <li>
            <Link to="/masses" title="Masses">
              Masses
            </Link>
          </li>
          <li>
            <Link to="/sacraments" title="Sacraments">
              Sacraments
            </Link>
          </li>
          <li>
            <Link to="/newsletter" title="Newsletter">
              Newsletter
            </Link>
          </li>
          <li>
            <Link to="/blog" title="Blog">
              Events
            </Link>
          </li>
          <li>
            <Link to="/#contact" title="Contact">
              Contact
            </Link>
          </li>
        </ul>
        <a
          className="menu-link"
          onClick={props.onToggleMenu}
          href="javascript:;"
        />
      </nav>
      <a />
    </header>
  </div>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
