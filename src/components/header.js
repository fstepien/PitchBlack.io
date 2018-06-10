import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/logo.svg'
console.log(logo)

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {/* {siteTitle} */}
          <img src={logo} alt="Level Up Logo" />
        </Link>
      </h1>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
