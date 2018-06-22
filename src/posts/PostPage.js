import React, { Component } from 'react'
import styled from 'styled-components'

export default class PostPage extends Component {
  render() {
    const { data } = this.props
    if (!data) return null
    return (
      <BlogPostSection>
        <div className="blog-posts__wrap">
          <span>{data.contentfulBlogPost.date}</span>
          <h1>{data.contentfulBlogPost.title}</h1>
          <div className="blog-posts__wrap__list">
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </BlogPostSection>
    )
  }
}

// $ slug defines there will be a variable slug in the context
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      slug
      id
    }
  }
`

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
