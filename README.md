# Pitch Black Marketing

Built using Gatsby/React, Contentful CMS, and hosted on Netlify hook and auto update. 

![](https://meta.filipstepien.com/pitchblack.stack.png)
![](https://meta.filipstepien.com/pitchblack.flow.arrow.png)

#### Web Hooks

Netlify will automatically update/rebuild the website based on Contentful changes by creating a web hook: 

1. Netfliy --> Build & Deploy --> Continous Deployment --> Build Hooks --> Add Buildhook --> https://api.netlify.com/build_hooks/YOUR_KEY
2. Contentful --> Settings --> Webhooks --> Add Webhook --> enter URL

![](https://meta.filipstepien.com/pitchblack.netlify.webhook.png)
![](https://meta.filipstepien.com/pitchblack.contentful.webhook.png)