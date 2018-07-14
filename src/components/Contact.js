import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'

const ContactWrapper = styled.section`
  background-color: #252a43;
`

const Contact = () => (
  <ContactWrapper id="contact">
    <div className="inner">
      <section>
        <form
          action="https://service.capsulecrm.com/service/newlead"
          method="post"
        >
          <input
            type="hidden"
            name="FORM_ID"
            value="e96df5fc-2286-41d1-b15d-97cbc4bf2325"
          />
          <input
            type="hidden"
            name="COMPLETE_URL"
            value="https://ironcovesolutions.com/success"
          />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" required name="FIRST_NAME" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" required name="EMAIL" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" required id="message" rows="6" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope" />
            <h3>Email</h3>
            <a href="mailto:sales@ironcovesolutions.com?subject=Interested in Learning more about Iron Cove Solutions">
              sales@ironcovesolutions.com
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone &amp; Hours</h3>
            <span>
              <a href="tel:1-888-959-2825">(888) 959-2825</a>
              <br />
              Monday-Friday: 9am to 5pm
            </span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home" />
            <h3>Address</h3>
            <span>
              8117 W. Manchester Ave<br />
              Suite 915<br />
              Playa Del Rey, CA 90293
            </span>
          </div>
        </section>
      </section>
    </div>
  </ContactWrapper>
)

export default Contact
