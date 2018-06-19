import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/PostListing'
import ServiceList from '../components/ServiceList'
import Contact from '../components/Contact'
import About from '../components/About'
import Testimonials from '../components/Testimonials'

const IndexPage = ({ data }) => (
  <div>
    <About about={data.allContentfulAbout} />
    <ServiceList services={data.allContentfulService.edges} />
    <section
      className="blog"
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <h2>Posts</h2>
      {/* mapping though each edge and pulling node from each  */}
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <PostListing key={node.id} post={node} />
      ))}
    </section>
    <Testimonials
      testimonials={data.allContentfulTestimonial}
      background={data.background}
    />
    <Contact id="contact" />
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/office.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
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
    allContentfulAbout {
      edges {
        node {
          body {
            childMarkdownRemark {
              html
              excerpt
            }
          }
          id
        }
      }
    }
    allContentfulTestimonial {
      edges {
        node {
          name
          job
          title
          testimonial {
            childMarkdownRemark {
              html
              excerpt
            }
          }
          id
        }
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          body {
            childMarkdownRemark {
              html
              excerpt
            }
          }
          createdAt(formatString: "MMMM DD, YYYY")
          slug
          id
        }
      }
    }
  }
`
