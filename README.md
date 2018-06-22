# Pitch Black Marketing

Built using Gatsby/React, Contentful CMS, and hosted on Netlify with a webhooks for auto updating. 

![](https://meta.filipstepien.com/pitchblack.stack.png)
![](https://meta.filipstepien.com/pitchblack.flow.arrow.png)

#### Web Hooks

Netlify will automatically update/rebuild the website based on Contentful changes by creating a web hook: 

1. Netfliy --> Build & Deploy --> Continous Deployment --> Build Hooks --> Add Buildhook --> https://api.netlify.com/build_hooks/YOUR_KEY
2. Contentful --> Settings --> Webhooks --> Add Webhook --> enter URL

![](https://meta.filipstepien.com/pitchblack.netlify.webhook.png)
![](https://meta.filipstepien.com/pitchblack.contentful.webhook.png)


#### Meta Data

**Google Analytics** were added using `gatsby-plugin-google-analytics` adding the following plugin in gatsby-config

```
plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      }
]
```

**Open Graph // Twitter Cards ** were added using [React Helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/#gatsby-plugin-react-helmet) using `gatsby-plugin-react-helmet` then added in the `<Helmet />` component