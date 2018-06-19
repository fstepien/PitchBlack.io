import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const About = ({ about }) => (
  <AboutSection className="about">
    <h2>Who We Are</h2>
    <div
      dangerouslySetInnerHTML={{
        __html: about.edges[0].node.body.childMarkdownRemark.html,
      }}
    />
    <button>Let's Work Together</button>
  </AboutSection>
)

export default About

const AboutSection = styled.section`
  margin: 50px auto;
  max-width: 1000px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
