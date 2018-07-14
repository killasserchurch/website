import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import Link from 'gatsby-link'

// To create a 404 page create a page whose path matches the regex /404*. Most often you’ll want to create a React component page at src/pages/404.js.
//
// Gatsby ensures that your 404 page is built as 404.html as many static hosting platforms default to using this as your 404 error page. If you’re hosting your site another way, you’ll need to setup a custom rule to serve this file for 404 errors.
//
// When developing, Gatsby adds a default 404 page that overrides your custom 404 page. But you can still visit the exact url for your 404 page to verify it’s working as expected.

export default () => (
  <div id="main" className="alt">
    <section>
      <div className="inner">
        <header>
          <h1>Not Found</h1>
        </header>
        <p>
          You landed on a page that does not exist.{' '}
          <Link to="/">Return to the site</Link> and try again.
        </p>
      </div>
    </section>
  </div>
)
