import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../images/logo.svg'
import Img from 'gatsby-image'

const HeaderWrapper = styled.div`
  background: black;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '70vh' : '20vh')};

  h1 {
    img {
      height: 80px;
    }
  }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`
const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      font-family: 'Nunito Sans', sans-serif;
      margin-left: 10px;
      a {
        text-decoration: none;
        color: grey;
        &:hover {
          color: white;
        }
      }
    }
  }
`

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { locations } = this.props
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/') {
        this.wrapper.animate([{ height: '20vh' }, { height: '70vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
        })
      } else {
        this.wrapper.animate([{ height: '70vh' }, { height: '20vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
        })
      }
    }
  }

  render() {
    const { data, location } = this.props
    return (
      <div>
        <HeaderWrapper
          isHome={location.pathname === '/'}
          // setting this.wrapper property equal the dom eleent of this headerWrapper required for dom animation api
          ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
        >
          <HeaderContainer>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <img src={logo} alt="Level Up Logo" />
              </Link>
            </h1>
            <p> {data.site.siteMetadata.title}</p>
            <p>{data.site.siteMetadata.desc}</p>
            <MainNav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about"> About</Link>
                </li>
              </ul>
            </MainNav>
          </HeaderContainer>
          <Img
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              opacity: 0.4,
            }}
            sizes={data.background.sizes}
          />
        </HeaderWrapper>
      </div>
    )
  }
}
