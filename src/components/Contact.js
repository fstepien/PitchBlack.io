import React, { Component } from 'react'
import styled from 'styled-components'
import Recaptcha from 'react-google-recaptcha'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'g-recapch-response': '',
      name: '',
      email: '',
      message: '',
    }
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .then(res => console.log(res))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
  }

  render() {
    const { name, email, message } = this.state
    return (
      <ContactSection id="contact">
        <div className="contact__text">
          <h2>GET IN TOUCH</h2>
          <p>
            Let's solve some of your marking, operations and production
            challenges today. Hit us up!
          </p>
        </div>
        <div className="form">
          <form
            onSubmit={this.handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="contact-recaptcha"
            method="post"
            data-netlify-recaptcha="true"
            netlify-recaptcha
            netlify
          >
            <input type="hidden" name="contact" value="contact" />
            <p>
              <label htmlFor="name">Your Name: </label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Your Name"
                onChange={this.handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="email">Your Email: </label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Your Email"
                onChange={this.handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="message">Message: </label>
              <textarea
                name="message"
                value={message}
                placeholder="Your Message"
                onChange={this.handleChange}
              />
            </p>
            <Recaptcha
              ref="recaptcha"
              sitekey="6Lft9F8UAAAAAC8antISjVFAnITvcVarillVFVGG"
              onChange={this.handleRecaptcha}
            />

            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </ContactSection>
    )
  }
}

export default Contact

const ContactSection = styled.section`
  margin: 0 auto 25px;
  z-index: 5;
  max-width: 1000px;
  padding: 75px 1.0875rem 1.45rem;
  font-family: 'Nunito Sans', sans-serif;
  text-align: center;
  textarea,
  input {
    width: 100%;
    max-width: 600px;
    border: 0;
    border-bottom: 1px solid black;
  }
  label {
    display: none;
  }
  & button {
    text-decoration: none;
    color: Black;
    border: solid 2px black;
    background-color: white;
    min-width: 300px;
    text-align: center;
    padding: 0.6rem 1rem;
    @media (max-width: 600px) {
      padding: 0.5rem;
    }
    margin-top: 50px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: background-color ease 0.5s;
    font-weight: bold;
    &:hover {
      color: black;
      background-color: yellow;
      font-weight: bold;
      transition: background-color ease 0.5s;
    }
  }
`
