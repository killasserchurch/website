import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import { withPrefix } from 'gatsby-link'
import PropTypes from 'prop-types'
import '../assets/scss/main.scss'

// config
import config from '../data/SiteConfig'

// components
import Header from 'components/Header'
import Menu from 'components/Menu'
import Contact from 'components/Contact'
import Footer from 'components/Footer'
import FooterCopyright from 'components/FooterCopyright'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
      >
        <Helmet>
          <link rel="stylesheet" href={withPrefix('skel.css')} />
          <title>{config.siteTitle}</title>
        </Helmet>
        <div id="wrapper">
          <Header data={this.props.data} onToggleMenu={this.handleToggleMenu} />
          {children()}
          {/* Don't show form on career-form page */}
          {this.props.location.pathname !== '/career-form/' ? (
            <Contact />
          ) : (
            undefined
          )}
          <Footer />
          <FooterCopyright />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
}

export default Template

// export const templateQuery = graphql`
//   query templateQuery {
//     background: imageSharp(id: { regex: "/ics-logo-new-large.png/" }) {
//       sizes(maxWidth: 1240) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `
