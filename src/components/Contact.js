import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <section className="contact">
    <h3>Get In Touch</h3>
    <p className="contact__intro">
      You can email me at
      <a href="mailto:contact@pitchblack.io">contact@pitchblack.io</a>
    </p>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>

      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </section>
)

export default Contact
