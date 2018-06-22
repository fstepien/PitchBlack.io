# Pitch Black Marketing

[Live site at PitchBlack.io](https://www.pitchblack.io/)

Pitch Black was built using Gatsby/React, Contentful CMS, and hosted on Netlify. The following diagram shows the deployment flow. Netlify re-builds and publishes the site triggered by changes in Contentful or Github content. 

![](https://meta.filipstepien.com/pitchblack.stack.png)

**GraphQL** calls are made to pull content from Contentful while building the static site. Webhooks are used to trigger a rebuild when content is updated. 

![](https://meta.filipstepien.com/pitchblack.flow.arrow.png)

#### Web Hooks

Netlify will automatically update/rebuild the website based on Contentful changes by creating a web hook: 

1. Netfliy --> Build & Deploy --> Continous Deployment --> Build Hooks --> Add Buildhook --> https://api.netlify.com/build_hooks/YOUR_KEY
2. Contentful --> Settings --> Webhooks --> Add Webhook --> enter URL

![](https://meta.filipstepien.com/pitchblack.netlify.webhook.png)

:rotating_light::rotating_light: BOTH "Content Type" AND "Entry" need to be checked off within the webhook settings to get automatic updating after adding new content on Contentful :rotating_light::rotating_light: 




![](https://meta.filipstepien.com/pitchblack.contentful.webhook.png)


#### Blog Posts 

Blog post pages are automatically built in gatsby by adding the following code in `gatsby-node.js` A graphQL call is made to get all blog posts on Contentful through `allContentfullBlogPost` where the `slug` is targeted and used to name a newly created page and in turn assign it a url. The page is created using the template from `src/posts/PostPage.js` that has a separate GraphQL call to get blog content. 


```
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve('./src/posts/PostPage.js'),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}

```
Multiple graphQL calls will not slow down the site because they are only done during the build process of the static site. In case anyone is also curious this process took under 3 seconds during the build. 

```
8:33:58 AM: success update schema — 0.192 s
8:33:58 AM: success extract queries from components — 0.107 s
8:34:00 AM: success run graphql queries — 2.417 s
8:34:00 AM: success write out page data — 0.004 s
```
#### Meta Data

**Google Analytics** were added using `gatsby-plugin-google-analytics` adding the following plugin in gatsby-config. One thing to note is the google analytics script does not display until a build process is run, so it does not appear when using `gatsby develop`. 

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

**Open Graph // Twitter Cards** were added using [React Helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/#gatsby-plugin-react-helmet) using `gatsby-plugin-react-helmet` then added in the `<Helmet />` component

#### Netlify Form 

Netlify provides a form service that can forward emails or connect to Zapier. A detailed description of how to layout the form can be found [here](https://www.netlify.com/docs/form-handling/?_ga=2.122139467.1774720107.1529406653-943809631.1528801563). I set this up quickly, but Netlify has a strong spam filter and was blocking all my test submissions, even though the honey-pot filed was present. reCAPTCHA solves this problem! I followed the automatic set up instructions in the docs, however this did not work possibly because the service is in beta and needed to be set up manually: 

1. [set up reCAPTCHA account](https://www.google.com/recaptcha/intro/v3beta.html)
2. [Add key and secret to build environment](https://www.netlify.com/blog/2018/05/23/bring-your-own-recaptcha-to-netlify-forms/)
3. Install `react-google-recaptch` to create a [component wrapper for google reCaptcha](https://github.com/dozoisch/react-google-recaptcha)
4. Build a form, you can find an example [here](https://github.com/fstepien/my-blog/blob/master/src/components/Contact.js)
5. Add event handlers for text input changers  + form submit, see form example above. 
6. I read that `echo SITE_RECAPTCHA_KEY=$SITE_RECAPTCHA_KEY >> env.production && gatsby build` should insert the site key into the reCAPTCHA component [[reference](https://github.com/imorente/gatsby-netlify-form-example)]. However, this again did not run as inteded so I added the site key as a string within the form.  


![](https://meta.filipstepien.com/pitchblack.form.png)


#### Wireframing

I wanted to try something new while wireframing and used a wireframing deck from [uxkits](https://uxkits.com/products/wireframe-deck-of-cards). As you can see from the picture below, you can get the whole team involve. If you want to try I would suggest doing it over a large sheet of paper so you can make notes on the site. And if you are working as team [inVision](https://www.invisionapp.com/) is also a great for collaborating. 

![](https://meta.filipstepien.com/pitchblack.wireframing.jpg)
![](https://meta.filipstepien.com/pitchblack.wireframing.png)
