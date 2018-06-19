import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Testimonials = ({ testimonials, background }) => (
  <TestimialsSection className="testimonials">
    <div className="testimonials__wrap">
      <h2>Testimonials</h2>
      {testimonials.edges.map(({ node }) => {
        return (
          <article className="testimonials__testimonial" key={node.id}>
            <div
              className="testimonials__testimonial__text"
              dangerouslySetInnerHTML={{
                __html: node.testimonial.childMarkdownRemark.html,
              }}
            />
            <div className="testimonials__testimonial__source">
              {node.name && (
                <span className="testimonials__testimonial__source__name">
                  {node.name}{' '}
                </span>
              )}
              {node.job && (
                <span className="testimonials__testimonial__source__job">
                  {node.job}{' '}
                </span>
              )}
              {node.title && (
                <span className="testimonials__testimonial__source__title">
                  {node.title}{' '}
                </span>
              )}
            </div>
          </article>
        )
      })}
    </div>
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: 1,
        zIndex: -1,
      }}
      sizes={background.sizes}
    />
  </TestimialsSection>
)

export default Testimonials

const TestimialsSection = styled.section`
  /* padding-top: 75px; */
  background: rgba(0, 0, 0, 0.75);
  position: relative;
  .testimonials__wrap {
    margin: 0 auto 25px;
    z-index: 5;
    max-width: 1000px;
    padding: 75px 1.0875rem 1.45rem;
    font-family: 'Nunito Sans', sans-serif;

    h2 {
      text-transform: uppercase;
      margin-bottom: 75px;
      font-weight: 400;
      color: white;
      z-index: 10;
      text-align: center;
    }

    & .testimonials__testimonial {
      z-index: 10;
      color: white;
      max-width: 900px;
      padding: 0 50px;
      margin: 0 auto 50px;
      text-align: center;
      position: relative;
      @media (max-width: 600px) {
        padding: 0;
      }
      &__text {
        font-style: italic;
      }
      &__source {
        font-weight: 300;
        &__job {
          color: yellow;
        }
      }
    }
  }
`
