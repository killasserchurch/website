import React, { Component } from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import BannerLanding from 'components/BannerLanding'
import BannerSection from 'components/BannerSection'
import Vid from 'components/Utilities/Vid'
import CustomLink from 'components/CustomLink'
import TechnologyPlanPost from 'components/TechnologyPlanPost'
import { Boxes } from 'components/Elements'

class TechnologyPost extends Component {
  render() {
    const {
      title,
      metaDescription,
      whyUseUs,
      pricingUrl,
      headerBackgroundImage,
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
      faqTable,
      plan,
      plansTitle,
      faqLeft,
      faqRight,
      sectionSixHeading,
    } = this.props.data.contentfulTechnology
    return (
      <div>
        <Helmet
          title={`${title} | ${this.props.data.site.siteMetadata.title}`}
          meta={[{ name: 'description', content: metaDescription }]}
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
                  className={plan !== null ? 'plan' : undefined}
                  dangerouslySetInnerHTML={{
                    __html: whyUseUs.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </div>
          </section>
          {plan === null && sectionTwoHeading !== null ? (
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
                <CustomLink whereTo={pricingUrl} whereToText="Pricing" />
              </div>
            </section>
          ) : (
            undefined
          )}
          {plan === null && sectionThreeHeading !== null ? (
            <section id="section-three">
              <div className="inner">
                <header>
                  <BannerSection sectionContent={sectionThreeHeading} />
                </header>
                <div
                  dangerouslySetInnerHTML={{
                    __html: whatWeCanDo.childMarkdownRemark.html,
                  }}
                />
              </div>
            </section>
          ) : (
            undefined
          )}
          {plan === null && sectionFourHeading !== null ? (
            <section id="section-four">
              <div className="inner">
                <header>
                  <BannerSection sectionContent={sectionFourHeading} />
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
          ) : (
            undefined
          )}
          {plan === null && sectionFiveHeading !== null ? (
            <section id="section-five">
              <div className="inner">
                <header>
                  <BannerSection sectionContent={sectionFiveHeading} />
                </header>
                {faqTable !== null ? (
                  <div className="row">
                    <div
                      className="ics-table"
                      dangerouslySetInnerHTML={{
                        __html: faqTable.childMarkdownRemark.html,
                      }}
                    />
                  </div>
                ) : (
                  undefined
                )}
              </div>
            </section>
          ) : (
            undefined
          )}

          {/* show plans if they exist */}
          {this.props.data.allContentfulTechnology !== null ? (
            <section>
              <div className="inner">
                <header>
                  <h2>{plansTitle}</h2>
                </header>
                <Boxes className="action boxes">
                  {this.props.data.allContentfulTechnology.edges.map(edge => (
                    <TechnologyPlanPost key={edge.node.slug} node={edge.node} />
                  ))}
                </Boxes>
              </div>
            </section>
          ) : (
            undefined
          )}
          {plan === null && sectionSixHeading !== null ? (
            <section>
              <div className="inner">
                <header>
                  {sectionSixHeading !== null ? (
                    <BannerSection sectionContent={sectionSixHeading} />
                  ) : (
                    <BannerSection sectionContent="Additional Information" />
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
          ) : (
            undefined
          )}
          <section>
            <CustomLink
              whereTo="/technology"
              whereToText="Back to Technology List"
            />
          </section>
          <hr />
        </div>
        {/* /.technology-post */}
      </div>
    )
  }
}

TechnologyPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TechnologyPost

export const technologyQuery = graphql`
  query technologyPostQuery($slug: String!, $companyName: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulTechnology(
      sort: { fields: [title] }
      filter: { plan: { eq: true }, companyName: { eq: $companyName } }
    ) {
      edges {
        node {
          title
          slug
          metaDescription
          companyName
          featuredImage {
            file {
              url
            }
            # resolutions {
            #  srcSet
            #  srcSetWebp
            # }
          }
        }
      }
    }
    contentfulTechnology(slug: { eq: $slug }) {
      title
      slug
      metaDescription
      sectionTwoHeading
      pricingUrl
      sectionThreeHeading
      sectionFourHeading
      sectionFiveHeading
      sectionSixHeading
      videoLeft
      videoRight
      plan
      plansTitle
      headerBackgroundImage {
        file {
          url
        }
        # resolutions {
        #   srcSet
        #   srcSetWebp
        #}
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
      faqTable {
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
