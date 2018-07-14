import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'
import { navigateTo } from 'gatsby-link'

const ContactWrapper = styled.section`
  background-color: #252a43;
`
function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

class CareerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <ContactWrapper id="contact">
        <div className="inner">
          <section>
            <h1>Apply For a Job</h1>
            <form
              name="career"
              method="post"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="career" />
              <p hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  required
                  name="name"
                  id="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field half">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  onChange={this.handeChange}
                />
              </div>
              <div className="field half">
                <label htmlFor="resume">Upload your resume</label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  onChange={this.handleAttachment}
                />
              </div>
              <div className="field half">
                <label htmlFor="coverLetter">Upload your cover letter</label>
                <input
                  type="file"
                  name="coverLetter"
                  id="coverLetter"
                  onChange={this.handleAttachment}
                />
              </div>
              <div className="field">
                <label htmlFor="linkedIn">LinkedIn</label>
                <input
                  type="url"
                  name="linkedIn"
                  id="linkedIn"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="gitHub">GitHub</label>
                <input
                  type="url"
                  name="gitHub"
                  id="gitHub"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="twitter">Twitter</label>
                <input
                  type="url"
                  name="twitter"
                  id="twitter"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="website">Personal Website</label>
                <input
                  type="url"
                  name="twitter"
                  id="twitter"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="message">
                  Anything else you would like us to know about you
                </label>
                <textarea name="message" id="message" rows="6" />
              </div>
              <div data-netlify-recaptcha />
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="special"
                  />
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
                <a href="mailto:sales@ironcovesolutions.com?subject=Interested%20in%20Learning%20more%20about%20Iron%20Cove%20Solutions">
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
  }
}

export default CareerForm
