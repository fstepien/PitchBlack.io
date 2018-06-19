module.exports = {
  siteMetadata: {
    title: 'Pitch Black Marketing',
    desc: 'Pitch Black Solves Problems For Direct Marketers',
  },
  pathPrefix: '/gatsby',
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '8uoxthlz1nrg',
        accessToken:
          '37384760786cb0370fc4c4f1638138b57902129202832401ae06ab2d1c5b32b6',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    //making images and files available to graphQL through gatsby-source-filessytem
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`nunito sans\:300,400,700]`],
      },
    },
    'gatsby-transformer-remark',
  ],
}
