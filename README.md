# Web Subatech - [Gatsby](https://gatsbyjs.org) version

## Initial setup for developpers

### Install nodejs

See [nodejs](https://nodejs.org/en/) (LTS version)

### Install gatsby-cli

```
npm install -g gatsby-cli
```

### Clone repo and install npm packages

```
cd someplace
git clone https://github.com/aphecetche/gatsby-subatest
cd gatsby-subatest
npm install
```

### Run the npm develop script


```
npm run develop
```

Open local site on [http://localhost:8000](http://localhost:8000)

At this point, any edit on a `src` file (markdown, js or css) should be seen live thanks to hot reloading.

It's pretty basic for the moment. All is basically "Work In Progress" ;-)

Only the text of the main content (articles) have been transfered (automatically, so do not edit them) from Joomla (from HTML to Markdown, using [aphecetche/joomla2markdown](https://github.com/aphecetche/joomla2markdown), using a dev site in [containers](https://github.com/aphecetche/docker-subaweb)). Images are not included in the git repo for the moment.

What has been developped a bit though is a [search prototype](http://localhost:8000/search) using [lunr](https://lunrjs.com)

The obvious next steps are :

- add the right side menus in the team pages
- deal with "special" content like seminars, job offers, etc...
- bring some images to see how to properly deal with them ...
- ...
