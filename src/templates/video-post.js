import React, { Component } from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import BannerSection from 'components/BannerSection'
import Vid from 'components/Utilities/Vid'
import CustomLink from 'components/CustomLink'

class VideoPost extends Component {
  render() {
    const {
      title,
      metaDescription,
      video,
      relatedContent,
      fontAwesomeCode,
    } = this.props.data.contentfulVideo
    return (
      <div>
        <Helmet
          title={`${title} | ${this.props.data.site.siteMetadata.title}`}
          meta={[{ name: 'description', content: metaDescription }]}
        />

        <div id="main" className="alt-colors">
          <section id="video-four">
            <div className="inner">
              <header>
                <BannerSection sectionContent={title} />
              </header>
              <div className="row">
                <div className="6u 12u$(medium)">
                  <Vid video={video} />
                </div>
                <div className="6u 12u$(medium)">
                  {relatedContent !== null ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: relatedContent.childMarkdownRemark.html,
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
            <CustomLink whereTo="/video" whereToText="Back to Video List" />
          </section>
          <hr />
        </div>
        {/* /.video-post */}
      </div>
    )
  }
}

VideoPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default VideoPost

export const videoQuery = graphql`
  query videoPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulVideo(slug: { eq: $slug }) {
      title
      slug
      metaDescription
      video
      fontAwesomeCode
      relatedContent {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
