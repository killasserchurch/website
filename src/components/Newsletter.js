import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
// import YouTube from 'react-youtube'
import PropTypes from 'prop-types'
import BannerLanding from './BannerLanding'
import BannerSection from './BannerSection'

const Newsletter = props => {
  const {
    title,
    metaDescription,
    headerBackgroundImage,
    sectionTwoHeading,
    sectionTwoContentLeft,
    sectionTwoContentMiddle,
    sectionTwoContentRight,
    sectionFourHeading,
    sectionFourContent,
  } = props.data.contentfulAbout

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

      <section id="section-two">
        <div className="inner">
          <header>
            {sectionTwoHeading !== null ? (
              <BannerSection sectionContent={sectionTwoHeading} />
            ) : (
              undefined
            )}
          </header>
          <div className="row">
            <div className="4u 12u$(medium)">
              {sectionTwoContentLeft !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: sectionTwoContentLeft.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </div>
            <div className="4u 12u$(medium)">
              {sectionTwoContentMiddle !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: sectionTwoContentMiddle.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </div>
            <div className="4u 12u$(medium)">
              {sectionTwoContentRight !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: sectionTwoContentRight.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </div>
          </div>
        </div>
      </section>
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

Newsletter.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Newsletter
