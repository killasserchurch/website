import React, { Component } from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import moment from 'moment'
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import BannerLanding from 'components/BannerLanding'
import BannerSection from 'components/BannerSection'
import CustomLink from 'components/CustomLink'

class CaseStudyPost extends Component {
  render() {
    const {
      title,
      metaDescription,
      headerBackgroundImage,
      businessSituation,
      customerProfile,
      benefits,
      solution,
      publishDate,
    } = this.props.data.contentfulCaseStudy
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
              <header>
                <h2>
                  Publish Date: {moment(publishDate).format('MMMM Do, YYYY')}
                </h2>
              </header>
            </div>
          </section>
          <section id="section-two">
            <div className="inner">
              <header>
                <BannerSection sectionContent="Business Situation" />
              </header>
              <div
                dangerouslySetInnerHTML={{
                  __html: businessSituation.childMarkdownRemark.html,
                }}
              />
            </div>
          </section>
          <section id="section-three">
            <div className="inner">
              <header>
                <BannerSection sectionContent="Customer Profile" />
              </header>
              <div
                dangerouslySetInnerHTML={{
                  __html: customerProfile.childMarkdownRemark.html,
                }}
              />
            </div>
          </section>
          <section id="section-four">
            <div className="inner">
              <header>
                <BannerSection sectionContent="Benefits" />
              </header>
              <div
                dangerouslySetInnerHTML={{
                  __html: benefits.childMarkdownRemark.html,
                }}
              />
            </div>
          </section>
          <section id="section-five">
            <div className="inner">
              <header>
                <BannerSection sectionContent="Solution" />
              </header>
              <div
                dangerouslySetInnerHTML={{
                  __html: solution.childMarkdownRemark.html,
                }}
              />
            </div>
          </section>
          <section>
            <CustomLink
              whereTo="/case-studies"
              whereToText="Back to Case Study List"
            />
          </section>
          <hr />
        </div>
      </div>
    )
  }
}

CaseStudyPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CaseStudyPost

export const caseStudyQuery = graphql`
  query caseStudyPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulCaseStudy(slug: { eq: $slug }) {
      title
      slug
      metaDescription
      publishDate
      headerBackgroundImage {
        file {
          url
        }
      }
      businessSituation {
        childMarkdownRemark {
          html
        }
      }
      customerProfile {
        childMarkdownRemark {
          html
        }
      }
      benefits {
        childMarkdownRemark {
          html
        }
      }
      solution {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
