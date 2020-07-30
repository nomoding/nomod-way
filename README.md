[![Netlify Status](https://api.netlify.com/api/v1/badges/c5db16b1-1274-4fa8-902c-426e9c0900e1/deploy-status)](https://app.netlify.com/sites/nomod-way/deploys)

# Nomod Way

The Nomod Way is detailed guide about how we run our business at Nomod. This is the central repository of our collective knowledge base. It is always changing and is open to anyone to contribute to, or fork and use for their own purposes.

## How to Install Locally

The Nomod Way is built with [Gatsby][1], an incredibly nice, fast, static site generator.
The best way to get up and running is to install it locally. Gatsby's [documentation is the best place to get started][2], or alternatively use the instructions below:

1. Clone this repo to your local machine

2. Install the Gatsby-CLI by running `npm install -g gatsby-cli`

3. Navigate to your repo directory and run `npm install`

To get a development server up and running:

1. Run `gatsby develop`

2. Boom, you're up! Gatsby will start a hot-reloading development environment of the Nomod Way at https://localhost:8000

## Building for Production & Deployment

1. Run `gatsby build`

2. To serve the production build locally, run `gatsby serve` and Gatsby will start a local production server for testing at https://localhost:9000

3. To deploy into production, commit or merge into the `master` branch. Netlify, which is where we're hosted, will automatically pick up the changes and will kick off a new build!

## Categories & Subcategories
The Nomod Way is organised into eight (8) categories and numerous subcategories.

A category is defined with the following properties in a markdown file:

```
---
templateKey: category-post
title: Company
description: About Nomod, our values, our culture, how we communicate, and, how
  we manage the Nomod Way
order: 1
--- 
````

A subcategory is defined with the following properties in a markdown file:

```
---
templateKey: subcategory-post
title: About
articleCategory: Company
subCategoryName: About
order: 1
---
```

In both cases, the `order` property is defined as an integer where a lower value will place the category or subcategory in a higher position than a lower integer value

Category files are named `category.md`, whilst subcategory files are named `category-subcategory.md`

## Articles
An article contains the content for a given topic. Any number of articles can be created under a given category and subcategory

An article is defined with the following properties at the top of a markdown file:

```
templateKey: article-post
title: About Nomod
articleCategory: Company
articleSubCategory: About
order: 1
````
The contents of the article should follow. 

### Images

Images are supported and can be added to an article by being uploaded to `/static/uploads` and then adding a standard image link to your markdown file: 

```
![digital banking is already upon us](/uploads/yourimage.jpg)`
````

Images should be used sparingly and only to enhance text with diagrams or to better express the content rather to share images for the sake of it. The intent of the Nomod Way remains to be a generally text heavy, highly referenceable, everyday working guide on how we run our business


## Contributing

Anyone can contribute to the Nomod Way, thank you for your consideration!

The best way to contribute is to install Gatsby locally , cloning this repo and [creating a pull request][3]. A pull request is a way to indicate that you'd like to make some changes to a given repository ([more reading on pull requests and good practice][4]).

1. Create a summary of your changes
2. Explain why you're making these changes
3. Create your pull request.

We aim to review and merge changes in as quickly as possible. If a request may require discussion, it'll take place as one or more comments to the pull request.

The alternative, easier way to contribute is to [use GitHub's built in editor][5]. This is a fast way to create, edit, rename or move a given file. Any changes that you make will result in a pull request.

## Licensing

Content contained in the Nomod Way is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](6). All code including the Nomod Gatsby theme is licensed under the [MIT License][7]


[1]:https://www.gatsbyjs.org
[2]:https://www.gatsbyjs.org/docs/quick-start/
[3]:https://help.github.com/articles/creating-a-pull-request/
[4]:https://help.github.com/articles/about-pull-requests/
[5]:https://help.github.com/categories/managing-files-in-a-repository/
[6]:https://creativecommons.org/licenses/by-sa/4.0/
[7]:LICENSE.md