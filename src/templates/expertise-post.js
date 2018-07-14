import React, { Component } from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import BannerLanding from 'components/BannerLanding'
import BannerSection from 'components/BannerSection'
import Vid from 'components/Utilities/Vid'
import CustomLink from 'components/CustomLink'

class ExpertisePost extends Component {
  render() {
    const {
      title,
      metaDescription,
      headerBackgroundImage,
      whyUseUs,
      sectionTwoHeading,
      whyWeRecommendLeft,
      whyWeRecommendMiddle,
      whyWeRecommendRight,
      sectionThreeHeading,
      whatWeCanDo,
      sectionFourHeading,
      videoLeft,
      videoRight,
      sectionFiveHeading,
      faqLeft,
      faqRight,
    } = this.props.data.contentfulExpertise
    return (
      <div>
        <Helmet
          title={`${title} | ${this.props.data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
          ]}
        />

        <BannerLanding
          title={title}
          desc={metaDescription}
          bg={
            headerBackgroundImage !== null
              ? headerBackgroundImage.file.url
              : undefined
          }
        />

        <div id="main" className="alt-colors">
          <section id="section-one">
            <div className="inner">
              {whyUseUs !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: whyUseUs.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </div>
          </section>
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
                  {whyWeRecommendLeft !== null ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: whyWeRecommendLeft.childMarkdownRemark.html,
                      }}
                    />
                  ) : (
                    undefined
                  )}
                </div>
                <div className="4u 12u$(medium)">
                  {whyWeRecommendMiddle !== null ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: whyWeRecommendMiddle.childMarkdownRemark.html,
                      }}
                    />
                  ) : (
                    undefined
                  )}
                </div>
                <div className="4u 12u$(medium)">
                  {whyWeRecommendRight !== null ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: whyWeRecommendRight.childMarkdownRemark.html,
                      }}
                    />
                  ) : (
                    undefined
                  )}
                </div>
              </div>
            </div>
          </section>
          <section id="section-three">
            <div className="inner">
              <header>
                {sectionThreeHeading !== null ? (
                  <BannerSection sectionContent={sectionThreeHeading} />
                ) : (
                  undefined
                )}
              </header>
              {whatWeCanDo !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: whatWeCanDo.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </div>
          </section>
          <section id="section-four">
            <div className="inner">
              <header>
                {sectionFourHeading !== null ? (
                  <BannerSection sectionContent={sectionFourHeading} />
                ) : (
                  undefined
                )}
              </header>
              <div className="row">
                <div className="6u 12u$(medium)">
                  <Vid video={videoLeft} />
                </div>
                <div className="6u 12u$(medium)">
                  <Vid video={videoRight} />
                </div>
              </div>
            </div>
          </section>
          <section id="section-five">
            <div className="inner">
              <header>
                {sectionFiveHeading !== null ? (
                  <BannerSection sectionContent={sectionFiveHeading} />
                ) : (
                  undefined
                )}
              </header>
              <div className="row">
                <div className="6u 12u$(medium)">
                  {faqLeft !== null ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: faqLeft.childMarkdownRemark.html,
                      }}
                    />
                  ) : (
                    undefined
                  )}
                </div>
                <div className="6u 12u$(medium)">
                  {faqRight !== null ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: faqRight.childMarkdownRemark.html,
                      }}
                    />
                  ) : (
                    undefined
                  )}
                </div>
              </div>
            </div>
          </section>
          <section>
            <CustomLink
              whereTo="/expertise"
              whereToText="Back to Expertise List"
            />
          </section>
          <hr />
        </div>
        {/* /.expertise-post */}
      </div>
    )
  }
}

ExpertisePost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ExpertisePost

export const expertiseQuery = graphql`
  query expertisePostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulExpertise(slug: { eq: $slug }) {
      title
      slug
      metaDescription
      sectionTwoHeading
      sectionThreeHeading
      sectionFourHeading
      sectionFiveHeading
      videoLeft
      videoRight
      headerBackgroundImage {
        file {
          url
        }
      }
      whyUseUs {
        childMarkdownRemark {
          html
        }
      }
      whyWeRecommendLeft {
        childMarkdownRemark {
          html
        }
      }
      whyWeRecommendMiddle {
        childMarkdownRemark {
          html
        }
      }
      whyWeRecommendRight {
        childMarkdownRemark {
          html
        }
      }
      whatWeCanDo {
        childMarkdownRemark {
          html
        }
      }
      faqLeft {
        childMarkdownRemark {
          html
        }
      }
      faqRight {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
