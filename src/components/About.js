import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const About = ({ about }) => (
  <AboutSection className="about">
    <h2>Who We Are</h2>
    <div
      className="service__text"
      dangerouslySetInnerHTML={{
        __html: about.edges[0].node.body.childMarkdownRemark.html,
      }}
    />
    <div className="service__text">
      <button>Let's Work Together</button>
    </div>
  </AboutSection>
)

export default About

const AboutSection = styled.section`
  margin: 75px auto;
  max-width: 1000px;
  padding: 0 1.0875rem 1.45rem;
  font-family: 'Nunito Sans', sans-serif;

  h2,
  h4 {
    text-transform: uppercase;
  }
  h2 {
      margin-bottom: 75px;
      font-weight: 400;
  }

  }
  & .service__text {
      max-width: 900px;
      padding: 0 50px;
      @media (max-width: 600px) {
        padding: 0;
      &:nth-of-type(2) {
        display: flex;
        justify-content: center;
      }
      }
      margin: 0 auto;
    
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
    }
`
