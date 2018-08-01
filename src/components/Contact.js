import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'

const ContactWrapper = styled.section`
  background-color: #252a43;
`

const Contact = () => (
  <ContactWrapper id="contact">
    <div className="inner">
      <section>
        <form>
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
            <a href="mailto:	killasserchurch@gmail.com?subject=Interested in Learning more about Killasser Parish">
              killasserchurch@gmail.com
            </a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone" />
            <h3>Phone &amp; Hours</h3>
            <span>
              <a href="tel:087-9548532">(087) 9548532</a>
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
              Killasser Swinford<br />
              Co Mayo, Ireland<br />
              Eircode: F12AH68
            </span>
          </div>
        </section>
      </section>
    </div>
  </ContactWrapper>
)

export default Contact
