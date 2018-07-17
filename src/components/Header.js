import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import PropTypes from 'prop-types'

// images
import logo from '../assets/images/logos/ics-logo-new.png'

const Header = props => (
  <div>
    <header id="header" className="alt">
      <Link to="/" className="logo" title="Iron Cove Solutions">
       <h1 style={{color: '#000000', fontSize: '2.2rem'}}>Killasser Parish</h1> 
      </Link>
      <nav>
        <ul className="flex-nav">
          <li>
            <Link to="/masses" title="Expertise">
             Masses 
            </Link>
          </li>
          <li>
            <Link to="/technology" title="Technology">
              Technology
            </Link>
          </li>
          <li>
            <Link to="/video" title="Video">
              Video
            </Link>
          </li>
          <li>
            <Link to="/workflow" title="Workflow">
              Workflow
            </Link>
          </li>
          <li>
            <Link to="/blog" title="Blog">
              Blog
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
