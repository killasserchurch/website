import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import config from '../data/SiteConfig'
import Privacy from 'components/Privacy'

const PrivacyPage = () => (
  <div className="privacy-container">
    <Helmet>
      <title>{`Privacy Page | ${config.siteTitle} }`}</title>
      <meta
        name="description"
        content="Iron Cove Solutions is a cloud service provider. Read our privacy policy. Call today 1-888-959-2825 for any questions."
      />
      <link rel="canonical" href={`${config.siteUrl}/privacy`} />
    </Helmet>
    <Privacy />
  </div>
)

export default PrivacyPage
