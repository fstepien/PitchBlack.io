import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Testimonials = ({ testimonials }) => (
  <TestimialsSection className="testimonials">
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
  </TestimialsSection>
)

export default Testimonials

const TestimialsSection = styled.section`
  margin: 50px auto;
  max-width: 1000px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
