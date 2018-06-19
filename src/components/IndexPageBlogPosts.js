import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PostListing from './PostListing'

const IndexPageBlogPosts = ({ posts }) => (
  <BlogPostSection className="blog-posts">
    <div className="blog-posts__wrap">
      <h2>Posts</h2>
      <div className="blog-posts__wrap__list">
        {posts.edges.map(({ node }) => (
          <PostListing key={node.id} post={node} />
        ))}
        <Link to={'/service'} className="blog-posts__wrap__list__link">
          Read More
        </Link>
      </div>
    </div>
  </BlogPostSection>
)

export default IndexPageBlogPosts

const BlogPostSection = styled.section`

  font-family: 'Nunito Sans', sans-serif;
  h2 {
      margin-bottom: 75px;
    text-transform: uppercase;
      font-weight: 400;
  }


   & .blog-posts__wrap {
    margin: 0 auto;
    max-width: 1000px;
    padding: 75px 1.0875rem 1.45rem;

    &__list {
 
       max-width: 900px;
      padding: 0 50px;
      @media (max-width: 600px) {
        padding: 0;
      }
      margin: 0 auto;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
        &__link {
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
            margin-bottom: 50px;
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
      &__item {
          h3 {

    text-transform: uppercase;
      font-weight: 400;
      a {
            text-decoration: none;
    color: black !important;
    &:hover {
      text-decoration: underline;
    }
      }

  }
        width: calc(50% - 10px);
        margin-bottom: 25px;
        @media (max-width: 600px) {
          width: calc(100%)
        }
        }

        & p {
            font-weight: 300;
        }

      
    }
 
}
    }
`
