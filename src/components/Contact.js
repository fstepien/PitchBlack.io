import React, { Component } from 'react'
import styled from 'styled-components'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '' }
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

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
          <form onSubmit={this.handleSubmit}>
            <p>
              <label for="name">Your Name: </label>
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
              <label for="email">Your Email: </label>
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
              <label for="message">Message: </label>
              <textarea
                name="message"
                value={message}
                placeholder="Your Message"
                onChange={this.handleChange}
              />
            </p>
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
