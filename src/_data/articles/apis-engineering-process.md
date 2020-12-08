---
templateKey: article-post
title: Our APIs Engineering Process
articleCategory: Engineering
articleSubCategory: Process
order: 2
---
### Background
We have two standalone APIs individually targetting our two apps:

1. The Nomod API is built in Python using the Django framework
2. Thhe Nomod for Stripe API is built in custom Python

The Nomod API is our primary focus and therefore all major new functionality is being built into it. The Nomod for Stripe API will continue to be maintained, but it is expected that features will be added less frequently.

### Tooling
We use the following tools for for our API engineering workflow:

- Clubhouse
- Github

We use [Clubhouse][1] to manage our user Stories, Epics, Milestones, and related workflows. We have a single [Engineering workflow][2] broken down by both project and stage. The relevant project for APIs is appropriately named [Backend][3] and is available as a standalone view within Clubhouse for additional visibility.

We use Github to manage all of our code and to host our code repositories. The relevant repositories for APIs are:

- [Nomod API][4]
- [Nomod for Stripe API][5]

We use Kubernetes together with Google Cloud Build to automatically build and push new version of our API to GCP [insert more details here].

### Documentation
Our API documentation is available in the [Nomod Docs repo][6] and is built with [Slant][7], an [Eleventy][8] based fork of [Slate][9] and is hosted on [Netlify][10]

### Communication & Standups
Daily Standups take place in [#eng-collab][11] (a Slack channel dedicated to external collaborators) at 0900 GMT, Monday through Friday. 

The [#eng-api][12] channel is dedicated to API discussions, whilst [#eng-apps][13] is dedicated to all mobile app development.

[1]: https://clubhouse.io
[2]: https://app.clubhouse.io/nomod/stories/space/17/engineering
[3]: https://app.clubhouse.io/nomod/project/894/backend
[4]: https://github.com/nomoding/nomod-api
[5]: https://github.com/nomoding/nomod-stripe-api
[6]: https://github.com/nomoding/nomod-docs
[7]: https://github.com/Mermade/reslate
[8]: https://www.11ty.dev/
[9]: https://github.com/slatedocs/slate/
[10]: https://nomod-docs.netlify.app/
[11]: https://nomoding.slack.com/archives/CMSB1TJG2
[12]: https://nomoding.slack.com/archives/CSWL98X0C
[13]: https://nomoding.slack.com/archives/CSX4J2CSH


