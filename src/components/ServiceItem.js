import React from 'react'
import Link from 'gatsby-link'

const ServiceItem = ({ service }) => (
  <article className="services__wrap__list__item">
    <h4>{service.title}</h4>
    <p>{service.intro}</p>
  </article>
)

export default ServiceItem
