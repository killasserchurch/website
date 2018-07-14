import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

// config
import config from '../data/SiteConfig'

// components
import About from 'components/About'

const AboutPage = props => (
  <div>
    <Helmet>
      <title>{`About | ${props.data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={props.data.contentfulAbout.metaDescription}
      />
    </Helmet>
    <About data={props.data} />
  </div>
)

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutQuery = graphql`
  query aboutPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulAbout(slug: { eq: "about" }) {
      title
      slug
      metaDescription
      sectionTwoHeading
      sectionThreeHeading
      videoLeft
      videoRight
      sectionFourHeading
      headerBackgroundImage {
        file {
          url
        }
      }
      sectionTwoContentLeft {
        childMarkdownRemark {
          html
        }
      }
      sectionTwoContentMiddle {
        childMarkdownRemark {
          html
        }
      }
      sectionTwoContentRight {
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
    }
  }
`
