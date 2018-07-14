import React from 'react'
import PropTypes from 'prop-types'

const BannerLanding = props => (
  <section
    style={{ backgroundImage: `url(${props.bg})` }}
    id="banner"
    className="style2"
  >
    <div className="inner">
      <header className="major">
        <h1>{props.title}</h1>
      </header>
      <div className="content">
        <p>{props.desc}</p>
      </div>
    </div>
  </section>
)

BannerLanding.propTypes = {
  bg: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default BannerLanding
