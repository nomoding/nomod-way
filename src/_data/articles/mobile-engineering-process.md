---
templateKey: article-post
title: Our Mobile Engineering Process
articleCategory: Engineering
articleSubCategory: Process
order: 1
---
### Background
Nomod's Apps are built in React Native. We chave two standalone apps targetting two different audiences.

1. Nomod for Stripe. This app is currently available as "Nomod" in both the App and Play Stores. In the near future it will be rebranded to Nomod for Stripe. The app requires a user to create or signup to a Stripe account and is targetted at users who have or are willing to have an active payments relationship with Stripe.

2. Nomod. This app is a fork of Nomod for Stripe and is turning into our primary app. This app will allow a user to sign in with their Nomod account, and process payments directly with Nomod, without requiring a third party payments relationship. All major new functionality will go into this app.

### Tooling
We use the following tools for for our mobile engineering workflow:

- Figma
- Clubhouse
- Github

All of our UI together with explanatory flows are located in Figma. Figma is organised into Projects, with each project containing a specific large set of features of our product. All mobile projects have an "App - " designation in their name followed by the feature, for example "App - Dashboard" is where you'll find UI for our Dashboard, or "App - Settings" is where you'll find UI for our Settings pane.

We use [Clubhouse][1] to manage our user Stories, Epics, Milestones, and related workflows. We have a single [Engineering workflow][2] broken down by both project and stage. The relevant project for mobile is appropriately named [Mobile][3] and is available as a standalone view within Clubhouse for additional visbility.

We use Github to manage all of our code and to hose our code repositories. The relvant repositories for Mobile are:

- [Nomod App][4]
- [Nomod for Stripe][5]

### Communication & Standups
Daily Standups take place in [#eng-collab][6] (a Slack channel dedicated to external collaborators) at 0900 GMT, Monday through Friday. 

The [#eng-apps][7] channel is dedicated to all mobile app development discussion, whilst [#eng-apis][8] is dedicated to all discussion around our APIs.

[1]: https://clubhouse.io
[2]: https://app.clubhouse.io/nomod/stories/space/17/engineering
[3]: https://app.clubhouse.io/nomod/project/896/mobile
[4]: https://github.com/nomoding/nomod-app
[5]: https://github.com/nomoding/nomod-stripe-app
[6]: https://nomoding.slack.com/archives/CMSB1TJG2
[7]: https://nomoding.slack.com/archives/CSX4J2CSH
[8]: https://nomoding.slack.com/archives/CSWL98X0C

