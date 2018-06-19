import React from 'react'
import Link from 'gatsby-link'
import ServiceItem from './ServiceItem'
import styled from 'styled-components'

const ServiceList = ({ services }) => (
  <ServiceListSection className="services">
    <div className="services__wrap">
      <h2>Featured Services</h2>
      <div className="services__wrap__list">
        {services.map(({ node }) => {
          return <ServiceItem key={node.id} service={node} />
        })}
        <Link to={'/service'} className="services__wrap__list__link">
          Read More
        </Link>
      </div>
    </div>
  </ServiceListSection>
)

export default ServiceList

const ServiceListSection = styled.section`
  font-family: 'Nunito Sans', sans-serif;
  background: black;
  color: white;
  h2,
  h4 {
    text-transform: uppercase;
  }
  h2 {
      margin-bottom: 75px;
          font-weight: 400;
  }
  h4 {
      margin-bottom: 50px;
      position: relative;
         font-weight: 400;
      &:after {
          content: "";
          width: 100px;
      
          border-bottom: solid 2px  yellow;
          position: absolute;
          bottom: -25px;
          left: 0;
          
      }
  }
  }
  & .services__wrap {
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
            color: yellow;
            border: solid 2px yellow;
            width: 20%;
            min-width: 170px;
            text-align: center;
            padding: 0.6rem 1rem;
            margin-bottom: 50px;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all ease 0.3s;
                font-weight: 400;
            &:hover {
                color: black;
                background: yellow;
                font-weight: bold;
            }
        }
      &__item {
        width: calc(30% - 10px);
        margin-bottom: 25px;
        @media (max-width: 1000px) {
          width: calc(50% - 10px)
        }
        }

        & p {
            font-weight: 300;
        }

      }
    }
  }
`
