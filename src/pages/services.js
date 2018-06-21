import React, { Component } from 'react'

const Services = ({ data }) => (
  <div
    style={{
      fontFamily: 'Nunito Sans, sans-serif',
      margin: '50px auto',
      maxWidth: 1000,
      padding: '0px 1.0875rem 1.45rem',
      paddingTop: 0,
    }}
  >
    <h1>Services</h1>
    {data.allContentfulService.edges.map(({ node }) => {
      return (
        <article className="service" key={node.id}>
          <h3>{node.title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: node.body.childMarkdownRemark.html,
            }}
          />
        </article>
      )
    })}
  </div>
)

export default Services

export const query = graphql`
  query ServiceQuery {
    allContentfulService {
      edges {
        node {
          title
          body {
            childMarkdownRemark {
              html
              excerpt
            }
          }
          slug
          id
          intro
        }
      }
    }
  }
`
