import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies

// custom components
import Banner from './Banner'
import BlogPostTeaser from './BlogPostTeaser'

// images
import gSuiteBg from '../assets/images/gsuite-bg.jpg'
import icsExperienceBg from '../assets/images/ics-city-bg.jpg'
import icsTechnologyBg from '../assets/images/ics-technology-bg.jpg'
import microsoftBg from '../assets/images/dropbox-city-scape-bg.jpg'
import dropboxBg from '../assets/images/computer-sunglass-notebook-iphone.jpg'
import oktaBg from '../assets/images/okta-highways-bg.jpg'

const Home = props => {
  const {
    title,
    metaDescription,
    bannerTitle,
    bannerH2,
    bannerH3,
    boxOneHeading,
    boxOneDescription,
    boxOneLink,
    boxTwoHeading,
    boxTwoDescription,
    boxTwoLink,
    boxThreeHeading,
    boxThreeDescription,
    boxThreeLink,
    boxFourHeading,
    boxFourDescription,
    boxFourLink,
    boxFiveHeading,
    boxFiveDescription,
    boxFiveLink,
    boxSixHeading,
    boxSixDescription,
    boxSixLink,
  } = props.data.contentfulHome

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${title} | ${props.data.site.siteMetadata.title}`}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <Banner
        bannerTitle={bannerTitle}
        bannerH2={bannerH2}
        bannerH3={bannerH3}
      />

      <div id="main">
        <section id="one" className="tiles">
          <article style={{ backgroundImage: `url(${icsExperienceBg})` }}>
            <header className="major">
              <h3>{boxOneHeading}</h3>
              {boxOneDescription !== null || boxOneDescription !== undefined ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: boxOneDescription.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </header>
            <Link
              to={`/${boxOneLink}`}
              className="link primary"
              title={boxOneHeading}
            />
          </article>
          <article style={{ backgroundImage: `url(${icsTechnologyBg})` }}>
            <header className="major">
              <h3>{boxTwoHeading}</h3>
              {boxTwoDescription !== null || boxTwoDescription !== undefined ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: boxTwoDescription.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </header>
            <Link
              to={`/${boxTwoLink}`}
              className="link primary"
              title={boxTwoHeading}
            />
          </article>
          <article style={{ backgroundImage: `url(${oktaBg})` }}>
            <header className="major">
              <h3>{boxThreeHeading}</h3>
              {boxThreeDescription !== null ||
              boxThreeDescription !== undefined ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: boxThreeDescription.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </header>
            <Link
              to={`/${boxThreeLink}`}
              className="link primary"
              title={boxThreeHeading}
            />
          </article>
          <article style={{ backgroundImage: `url(${microsoftBg})` }}>
            <header className="major">
              <h3>{boxFourHeading}</h3>
              {boxFourDescription !== null ||
              boxFourDescription !== undefined ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: boxFourDescription.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </header>
            <Link
              to={`/${boxFourLink}`}
              className="link primary"
              title={boxFourHeading}
            />
          </article>
          <article style={{ backgroundImage: `url(${dropboxBg})` }}>
            <header className="major">
              <h3>{boxFiveHeading}</h3>
              {boxFiveDescription !== null ||
              boxFiveDescription !== undefined ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: boxFiveDescription.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </header>
            <Link
              to={`/${boxFiveLink}`}
              className="link primary"
              title={boxFiveHeading}
            />
          </article>
          <article style={{ backgroundImage: `url(${gSuiteBg})` }}>
            <header className="major">
              <h3>{boxSixHeading}</h3>
              {boxSixDescription !== null || boxSixDescription !== undefined ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: boxSixDescription.childMarkdownRemark.html,
                  }}
                />
              ) : (
                undefined
              )}
            </header>
            <Link
              to={`/${boxSixLink}`}
              className="link primary"
              title={boxSixHeading}
            />
          </article>
        </section>
        <section id="blog">
          <div className="inner">
            <header>
              <h2>
                <Link to="/blog">Blog Posts</Link>
              </h2>
              <div className="action blog-post items">
                {props.data.allContentfulBlog.edges.map(edge => (
                  <BlogPostTeaser key={edge.node.slug} node={edge.node} />
                ))}
              </div>
            </header>
          </div>
        </section>
        <section id="case-studies">
          <div className="inner">
            <header className="major">
              <h2>
                <Link to="/case-studies">Case Studies</Link>
              </h2>
            </header>
            <p>
              Read all our Case Studies to discover how we deployed these
              services.
            </p>
            <ul className="actions" id="aboveContact">
              <li>
                <Link to="/case-studies" className="button next">
                  READ MORE
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Home