import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import OktaLanding from 'components/OktaLanding'
import TechnologyNavbar from 'components/Common/technology-navbar'

import pic08 from '../../assets/images/pic08.jpg'
import pic09 from '../../assets/images/pic09.jpg'
import pic10 from '../../assets/images/pic10.jpg'

const Okta = props => (
  <div>
    <Helmet>
      <title>Ironcove Solutions | Okta</title>
      <meta
        name="description"
        content="We are certified Okta Consultants specializing in Setting Up Okta to many cloud services. We have deployed to Office 365, Salesforce.com, Slack  1-888-959-2825"
      />
    </Helmet>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Why use us for Okta consulting?</h2>
            <TechnologyNavbar />
          </header>
          <p>We can seamlessly integrate Okta into everyday business life.</p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Why do we recommend Okta?</h3>
              </header>
              <ul>
                <li>
                  Its ability to easily secure user access to cloud applications
                </li>
                <li>
                  Its ability to easily increase security for customers and
                  partners
                </li>
                <li>
                  Lifecycle management should be an important process to
                  improve. Okta can decrease onboarding time of cloud
                  applications
                </li>
                <li>
                  Its Okta ability to easily automate on-boarding and
                  off-boarding by seamlessly communicating between directories
                  and cloud apps
                </li>
              </ul>
              <p>
                By connecting Active Directory to Okta’s Universal Directory,
                this will make provisioning of user easier for IT. A single set
                of credentials grants users access to the cloud apps they need,
                whether it is on-premise or via mobile devices.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/gsuite" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Rhoncus magna</h3>
              </header>
              Hero Banner
              <h1 class="head-title animated bounceInDown animation-delay-5 hidden-xs">
                Integrate Okta IAM like a fortune 500 company.
              </h1>
              <h1 class="head-title visible-xs">Okta Consulting</h1>
              <div
                class="alert alert-primary text-center visible-xs"
                role="alert"
              >
                <a class="alert-link" href="tel:+1-213-545-0601">
                  Call Today!
                </a>
              </div>
              <h2 class="secondary-color text-center head-subtitle animated fadeInUp animation-delay-15 hidden-xs">
                <span class="head-subtitle-white">
                  INCREASE SECURITY AROUND YOUR MOST VULNERABLE POINT:<br />
                  "LOGIN ACCESS".
                </span>
              </h2>
              Section
              <h4>Certified</h4>
              <p>
                Iron Cove Solutions is Okta certified as both Professional and
                Administrator. We are tested and approved by Okta Enterprise
                Team.
              </p>
              <h4>Migration</h4>
              <p>
                We have a long <strong>history</strong> of migrating information
                from a local server to cloud services. Users, data and active
                directory, no problem.
              </p>
              <h4>Knowledge</h4>
              <p>
                Businesses <strong>leverage</strong> our knowledge as certified
                experts in Microsoft Office 365, Okta, Dropbox and many other
                cloud services.
              </p>
              <h4>Developer</h4>
              <p>
                Businesses leverage our ASP.net and React developers to enhance
                the customer experience while bringing enterprise security to
                your firm. Our knowledge around Oauth, OpenID, to establish
                trust around device, location, and people.{' '}
              </p>
              Section
              <h2>Why do we recommend Okta?</h2>
              <ul>
                <li>
                  Its ability to easily secure user access to cloud
                  applications.
                </li>
                <li>
                  Its ability to easily increase security for customers and
                  partners.
                </li>
                <li>
                  Lifecycle management should be an important process to
                  improve. Okta can decrease onboarding time of cloud
                  applications.
                </li>
                <li>
                  {' '}
                  Its Okta ability to easily automate on-boarding and
                  off-boarding by seamlessly communicating between directories
                  and cloud apps.
                </li>
                <li>
                  By connecting Active Directory to Okta’s Universal Directory,
                  this will make provisioning of user easier for IT.
                </li>
                <li>
                  A single set of credentials grants users access to the cloud
                  apps they need, whether it is on-premise or via mobile
                  devices.
                </li>
              </ul>
              Section
              <h2>What can we do for your Okta deployment?</h2>
              <h4>
                We can work with your engineers to install and set-up Okta.
              </h4>
              <ul>
                <li>
                  We can make sure the deployment is done cleanly and
                  seamlessly.
                </li>
                <li>
                  We can make sure integration happens with on-premise
                  applications.
                </li>
                <li>
                  We can make sure the connection between Active Directory and
                  Okta’s Universal Directory is working in tandem.
                </li>
              </ul>
              Section
              <h2>Our Okta Microsoft Office 365 integration experience.</h2>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sed nunc ligula</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
)

export default Okta
