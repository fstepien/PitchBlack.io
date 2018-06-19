import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({ post }) => (
  <article className="blog-posts__wrap__list__item">
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <small>{post.createdAt}</small>
    <p>{post.body.childMarkdownRemark.excerpt}</p>
  </article>
)

export default PostListing
