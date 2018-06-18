import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <section className="contact">
    <h3>Get In Touch</h3>
    <p className="contact__intro">
      You can email me at
      <a href="mailto:contact@pitchblack.io">contact@filipstepien.com</a>
    </p>
    <form
      name="contact"
      data-netflify="true"
      data-netflify-honeypot="bot-filed"
      method="post"
    >
      <input type="text" name="name" placeholder="Name" />
      <button>Send</button>
    </form>
  </section>
)

export default Contact
