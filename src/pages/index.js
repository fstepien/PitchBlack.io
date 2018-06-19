import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/PostListing'
import ServiceList from '../components/ServiceList'
import Contact from '../components/Contact'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import IndexPageBlogPosts from '../components/IndexPageBlogPosts'

const IndexPage = ({ data }) => (
  <div>
    <About about={data.allContentfulAbout} />
    <ServiceList services={data.allContentfulService.edges} />
    <IndexPageBlogPosts posts={data.allContentfulBlogPost} />
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
