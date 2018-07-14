import React from 'react'
import Helmet from 'react-helmet'

// import thankYouPic from '../assets/images/logos/300x300-ics-logo.png'

const Success = props => (
  <div>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Success/Thank You Page</h1>
          </header>
          {/*<span className="image main">
             <img src={thankYouPic} alt="" />
           </span>
           */}
          <p>Thank you for contacting us!</p>
        </div>
      </section>
    </div>
  </div>
)

export default Success
