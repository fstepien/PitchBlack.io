import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/PostListing'
import ServiceList from '../components/ServiceList'

const IndexPage = ({ data }) => (
  <div>
    <section
      className="about"
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <h2>Who We Are</h2>
    </section>
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
