import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Failte Cill Lasrach</h1>
      </header>
      <div className="content">
        {props.bannerText !== null || props.bannerText !== undefined ? (
          <div
            dangerouslySetInnerHTML={{
              __html: props.bannerText.childMarkdownRemark.html,
            }}
          />
        ) : (
          undefined
        )}
      </div>
    </div>
  </section>
)

Banner.propTypes = {
  bannerText: PropTypes.object.isRequired,
}

export default Banner
