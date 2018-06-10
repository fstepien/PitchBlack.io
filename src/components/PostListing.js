import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({ post }) => (
  <article>
    <h3>{post.frontmatter.title}</h3>
    <small>{post.frontmatter.date}</small>
    <p>{post.excerpt}</p>
    {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
  </article>
)

export default PostListing
