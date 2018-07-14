import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>{props.bannerTitle}</h1>
      </header>
      <div className="content">
        <h2>{props.bannerH2}</h2>
        <p>{props.bannerH3}</p>
        <ul className="actions">
          <li>
            <a href="/#aboveContact" className="button next scrolly">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

Banner.propTypes = {
  bannerTitle: PropTypes.string.isRequired,
  bannerH2: PropTypes.string.isRequired,
  bannerH3: PropTypes.string.isRequired,
}

export default Banner
