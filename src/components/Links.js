import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
// import YouTube from 'react-youtube'
import PropTypes from 'prop-types'
import BannerLanding from './BannerLanding'
import BannerSection from './BannerSection'

const Links = props => {
  const {
    title,
    metaDescription,
    headerBackgroundImage,
    sectionFourHeading,
    sectionFourContent,
  } = props.data.contentfulLinks

  return (
    <div id="main" className="alt-colors">
      <BannerLanding
        title={title}
        desc={metaDescription}
        bg={
          headerBackgroundImage !== null
            ? headerBackgroundImage.file.url
            : undefined
        }
      />
      <section id="section-four">
        <div className="inner">
          <header>
            <BannerSection sectionContent={sectionFourHeading} />
          </header>
          {sectionFourContent !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: sectionFourContent.childMarkdownRemark.html,
              }}
            />
          ) : (
            undefined
          )}
        </div>
      </section>
      <hr />
    </div>
  )
}

Links.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Links
