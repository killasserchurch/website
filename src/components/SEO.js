import React, { Component } from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import config from '../data/SiteConfig'

class SEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props
    let title
    let description
    let image
    let postURL
    if (postSEO) {
      const postMeta = postNode
      ;({ title } = postMeta)
      description = postMeta.metaDescription
      if (postMeta.featuredImage !== null) {
        image = postMeta.featuredImage.file.url
          ? postMeta.featuredImage.file.url
          : undefined
      }
      postURL = config.siteUrl + config.pathPrefix + postPath
    } else {
      title = config.siteTitle
      description = config.siteDescription
      image = config.siteLogo
    }
    const blogURL = config.siteUrl + config.pathPrefix

    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ''}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ''}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    )
  }
}

SEO.propTypes = {
  postNode: PropTypes.object,
  postPath: PropTypes.string,
  postSEO: PropTypes.bool,
}

export default SEO
