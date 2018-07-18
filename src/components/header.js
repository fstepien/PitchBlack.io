import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../images/logo.svg'
import Img from 'gatsby-image'

const HeaderWrapper = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  background: black;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '70vh' : '20vh')};

  margin: 0 auto;
  padding: 1.0875rem 1.0875rem 0;

  h1 {
    & a {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      img {
        height: 30px;
        margin: 0 10px 0 0;
      }
      span {
        font-size: 20px;
        text-transform: uppercase;
      }
    }
  }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1500px;
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
  @media (max-width: 630px) {
    display: none;
  }
`
const MainText = styled.div`
  color: white;
  position: absolute;

  bottom: ${({ isHome }) => (isHome ? '50%' : '200%')};
  transform: translateX(-50%) translateY(50%);
  @media (max-height: 700px) {
    /* bottom: ${({ isHome }) => (isHome ? '10%' : '100%')}; */
    /* transform: translateX(-50%) translateY(0%); */
  }
  opacity: ${({ isHome }) => (isHome ? '1' : '0')};
  left: 50%;
  z-index: 5;
  max-width: 620px;
  display: inline;
  transition: all 0.6s ease-in-out;
  & h1 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 3rem;
    @media (max-height: 700px) {
      font-size: 2rem;
    }
    line-height: 1.2;
    background-color: black;
    display: inline;
    font-size: 3rem;
    box-shadow: 10px 0 0 black, -10px 0 0 black;
    & .yellow {
      color: yellow;
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
            <h1>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <img src={logo} alt="Pitch Black Icosahedron" />
                <span> {data.site.siteMetadata.title}</span>
              </Link>
            </h1>

            <MainNav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/blog"> Blog</Link>
                </li>
                <li>
                  <Link to="/services"> Services</Link>
                </li>
                <li>
                  {this.props.location.pathname === '/' ? (
                    <a href="#contact"> Contact</a>
                  ) : (
                    <Link to="/#contact"> Contact</Link>
                  )}
                </li>
              </ul>
            </MainNav>
          </HeaderContainer>
          <MainText isHome={location.pathname === '/'}>
            <h1>
              Pitch Black <br />
              <span className="yellow">Solves Problems</span> <br />for direct
              marketers
            </h1>
          </MainText>
          <Img
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              opacity: 0.45,
            }}
            sizes={data.background.sizes}
          />
        </HeaderWrapper>
      </div>
    )
  }
}
