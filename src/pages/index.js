import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/PostListing'

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {/* mapping though each edge and pulling node from each  */}
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
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
