import React, { Component } from 'react'
import styled from 'styled-components'
import Recaptcha from 'react-google-recaptcha'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
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
            name="contact-recaptcha"
            method="post"
            action="/blog/"
            data-netlify="true"
            data-netlify-recaptcha="true"
            onSubmit={this.handleSubmit}
          >
            <noscript>
              <p>This form won’t work with Javascript disabled</p>
            </noscript>
            <p>
              <label>
                Your name:<br />
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your email:<br />
                <input type="email" name="email" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message:<br />
                <textarea name="message" onChange={this.handleChange} />
              </label>
            </p>
            <Recaptcha
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              // sitekey="6Lft9F8UAAAAAC8antISjVFAnITvcVarillVFVGG"
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
