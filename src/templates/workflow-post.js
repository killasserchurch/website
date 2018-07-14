import React, { Component } from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'
import BannerSection from 'components/BannerSection'
import CustomLink from 'components/CustomLink'

const WorkflowWrapper = styled.ul`
  margin: 0;
  padding: 3rem 0;
  text-align: center;
  font-family: Ruda;

  li {
    float: none;
    list-style: none;
    display: inline-block;
    padding: 0 1.5rem;

    &.process_arrow {
      position: relative;
      bottom: 4rem;
    }

    i {
      vertical-align: middle;
    }

    span {
      display: block;
      text-align: center;
      font-size: 17px;
      line-height: 55px;
      font-weight: 400;
    }
  }
`

class WorkflowPost extends Component {
  render() {
    const {
      title,
      metaDescription,
      iconOne,
      iconTwo,
      iconThree,
      iconFour,
      iconFive,
      iconOneText,
      iconTwoText,
      iconThreeText,
      iconFourText,
      iconFiveText,
      sectionOneContent,
      sectionTwoContent,
      sectionThreeContent,
      sectionFourContent,
      sectionFiveContent,
      sectionSixContent,
      sectionSevenContent,
      sectionOneImage,
      sectionTwoImage,
      sectionThreeImage,
      sectionFourImage,
      sectionFiveImage,
      sectionSixImage,
      sectionSevenImage,
      bannerHeading,
    } = this.props.data.contentfulWorkflow
    return (
      <div>
        <Helmet
          title={`${title} | ${this.props.data.site.siteMetadata.title}`}
          meta={[{ name: 'description', content: metaDescription }]}
        />

        <div id="main" className="alt-colors">
          <section id="section-one">
            <div className="inner">
              <h2>{title}</h2>
              <WorkflowWrapper>
                <li>
                  <i className={`fa ${iconOne} fa-5x`} aria-hidden="true" />
                  <span>{iconOneText}</span>
                </li>
                <li className="process_arrow">
                  <i
                    className="fa fa-long-arrow-right fa-3x"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <i className={`fa ${iconTwo} fa-5x`} aria-hidden="true" />
                  <span>{iconTwoText}</span>
                </li>
                <li className="process_arrow">
                  <i
                    className="fa fa-long-arrow-right fa-3x"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <i className={`fa ${iconThree} fa-5x`} aria-hidden="true" />
                  <span>{iconThreeText}</span>
                </li>
                <li className="process_arrow">
                  <i
                    className="fa fa-long-arrow-right fa-3x"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <i className={`fa ${iconFour} fa-5x`} aria-hidden="true" />
                  <span>{iconFourText}</span>
                </li>
                <li className="process_arrow">
                  <i
                    className="fa fa-long-arrow-right fa-3x"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <i className={`fa ${iconFive} fa-5x`} aria-hidden="true" />
                  <span>{iconFiveText}</span>
                </li>
              </WorkflowWrapper>
            </div>
          </section>
          <section id="expertise">
            <div className="inner">
              <header>
                <BannerSection sectionContent={bannerHeading} />
              </header>
              <div className="row">
                <div className="8u 12u$(medium)">
                  <div className="inner">
                    {sectionOneContent !== null ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: sectionOneContent.childMarkdownRemark.html,
                        }}
                      />
                    ) : (
                      undefined
                    )}
                  </div>
                </div>
                <div className="4u 12u$(medium)">
                  <img src={sectionOneImage.file.url} alt="ux" />
                </div>
              </div>
            </div>
          </section>
          <section id="native">
            <div className="inner">
              <div className="row">
                <div className="8u 12u$(medium)">
                  {sectionTwoContent !== null ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sectionTwoContent.childMarkdownRemark.html,
                      }}
                    />
                  ) : (
                    undefined
                  )}
                </div>
                <div className="4u 12u$(medium)">
                  <img src={sectionTwoImage.file.url} alt="ux" />
                </div>
              </div>
            </div>
          </section>
          <section id="touch">
            <div className="inner">
              <div className="row">
                <div className="8u 12u$(medium)">
                  {sectionThreeContent !== null ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sectionThreeContent.childMarkdownRemark.html,
                      }}
                    />
                  ) : (
                    undefined
                  )}
                </div>
                <div className="4u 12u$(medium)">
                  <img src={sectionThreeImage.file.url} alt="ux" />
                </div>
              </div>
            </div>
          </section>
          <section id="location">
            <div className="inner">
              <div className="row">
                <div className="8u 12u$(medium)">
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
                <div className="4u 12u$(medium)">
                  <img src={sectionFourImage.file.url} alt="ux" />
                </div>
              </div>
            </div>
          </section>
          {sectionFiveContent !== null ? (
            <section id="integration">
              <div className="inner">
                <div className="row">
                  <div className="8u 12u$(medium)">
                    {sectionFiveContent !== null ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: sectionFiveContent.childMarkdownRemark.html,
                        }}
                      />
                    ) : (
                      undefined
                    )}
                  </div>
                  <div className="4u 12u$(medium)">
                    <img src={sectionFiveImage.file.url} alt="ux" />
                  </div>
                </div>
              </div>
            </section>
          ) : (
            undefined
          )}
          {sectionSixContent !== null ? (
            <section id="quality-assured">
              <div className="inner">
                <div className="row">
                  <div className="8u 12u$(medium)">
                    {sectionSixContent !== null ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: sectionSixContent.childMarkdownRemark.html,
                        }}
                      />
                    ) : (
                      undefined
                    )}
                  </div>
                  <div className="4u 12u$(medium)">
                    <img src={sectionSixImage.file.url} alt="ux" />
                  </div>
                </div>
              </div>
            </section>
          ) : (
            undefined
          )}
          <section id="cloud-deployment">
            <div className="inner">
              <div className="row">
                <div className="8u 12u$(medium)">
                  {sectionSevenContent !== null ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sectionSevenContent.childMarkdownRemark.html,
                      }}
                    />
                  ) : (
                    undefined
                  )}
                </div>
                <div className="4u 12u$(medium)">
                  <img src={sectionSevenImage.file.url} alt="ux" />
                </div>
              </div>
            </div>
          </section>
          <section>
            <CustomLink
              whereTo="/workflow"
              whereToText="Back to Workflow List"
            />
          </section>
          <hr />
        </div>
        {/* /.technology-post */}
      </div>
    )
  }
}

WorkflowPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WorkflowPost

export const workflowQuery = graphql`
  query workflowPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulWorkflow(slug: { eq: $slug }) {
      title
      slug
      metaDescription
      iconOne
      iconTwo
      iconThree
      iconFour
      iconFive
      iconOneText
      iconTwoText
      iconThreeText
      iconFourText
      iconFiveText
      bannerHeading
      sectionOneContent {
        childMarkdownRemark {
          html
        }
      }
      sectionTwoContent {
        childMarkdownRemark {
          html
        }
      }
      sectionThreeContent {
        childMarkdownRemark {
          html
        }
      }
      sectionFourContent {
        childMarkdownRemark {
          html
        }
      }
      sectionFiveContent {
        childMarkdownRemark {
          html
        }
      }
      sectionSixContent {
        childMarkdownRemark {
          html
        }
      }
      sectionSevenContent {
        childMarkdownRemark {
          html
        }
      }
      sectionOneImage {
        file {
          url
        }
      }
      sectionTwoImage {
        file {
          url
        }
      }
      sectionThreeImage {
        file {
          url
        }
      }
      sectionFourImage {
        file {
          url
        }
      }
      sectionFiveImage {
        file {
          url
        }
      }
      sectionSixImage {
        file {
          url
        }
      }
      sectionSevenImage {
        file {
          url
        }
      }
    }
  }
`
