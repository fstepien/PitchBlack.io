import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'PITCH BLACK SOLVES PROBELMS FOR DIRECT MARKETERS',
        },
        {
          name: 'keywords',
          content:
            'Digital Strategy, SEO, Copy Writing, Social Media, Marketing, PCC, Media Buying, GEO, Design, Branding',
        },
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:title',
          content: 'PITCH BLACK SOLVES PROBELMS FOR DIRECT MARKETERS',
        },
        {
          name: 'twitter:image',
          content: 'https://meta.filipstepien.com/pitchblack.meta.png',
        },
        { name: 'og:title', content: 'PITCH BLACK MARKETING' },
        {
          name: 'og:image',
          content: 'https://meta.filipstepien.com/pitchblack.meta.png',
        },
        {
          name: 'og:description',
          content: 'Pitch Black solves problems for direct marketers',
        },
        {
          name: 'og:url',
          content: 'https://www.pitchblack.io/',
        },
      ]}
    />
    <Header data={data} location={location} />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
