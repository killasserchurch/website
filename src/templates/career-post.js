import React, { Component } from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import moment from 'moment'
import BannerLanding from 'components/BannerLanding'
import BannerSection from 'components/BannerSection'
import CustomLink from 'components/CustomLink'

class CareerPost extends Component {
  render() {
    const {
      title,
      metaDescription,
      headerBackgroundImage,
      jobDescription,
      requirements,
      jobLocation,
      hoursOfWork,
      datePosted,
    } = this.props.data.contentfulCareer
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
                <BannerSection sectionContent="Job Description" />
              </header>
              {jobDescription !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: jobDescription.childMarkdownRemark.html,
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
                <BannerSection sectionContent="Requirements" />
              </header>
              {requirements !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: requirements.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </div>
          </section>
          <section id="section-three">
            <div className="inner">
              <header>
                <BannerSection sectionContent="Job Location" />
              </header>
              <p>{jobLocation}</p>
            </div>
          </section>
          <section id="section-four">
            <div className="inner">
              <header>
                <BannerSection sectionContent="Hours of Work" />
              </header>
              <p>{hoursOfWork}</p>
            </div>
          </section>
          <section id="section-five">
            <div className="inner">
              <header>
                <BannerSection sectionContent="Date Posted" />
              </header>
              <p>{moment(datePosted).format('MMMM Do YYYY')}</p>
            </div>
          </section>
          <section>
            <CustomLink
              whereTo="/career"
              whereToText="Back to Jobs List"
              cta="Interested? Tell Us About Yourself"
              ctaLink="/career-form"
            />
          </section>
          <hr />
        </div>
      </div>
    )
  }
}

CareerPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CareerPost

export const careerQuery = graphql`
  query careerPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCareer(slug: { eq: $slug }) {
      title
      slug
      metaDescription
      jobLocation
      hoursOfWork
      datePosted
      headerBackgroundImage {
        file {
          url
        }
      }
      jobDescription {
        childMarkdownRemark {
          html
        }
      }
      requirements {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
