# Status of the site

All is still basically "Work In Progress" ;-)

Only the the main content (articles) have been transfered (automatically, so do please do not edit them yet) from Joomla (from HTML to Markdown, using [aphecetche/joomla2markdown](https://github.com/aphecetche/joomla2markdown), using a dev site in [containers](https://github.com/aphecetche/docker-subaweb)).


# Instructions/notes for editors

The vast majority of the content is written in [Markdown](https://www.markdownguide.org) (using the `.md` filename extension).

Slightly more complex pages can be written in [MDX](https://mdxjs.com) (file extension `.mdx`)

For even more complex pages or full freedom, please use plain [React](https://reactjs.org) components (using `js` or `jsx` extensions).

For `md` or `mdx` pages the filenames *must* contain the language code :

- fr for markdown pages in french
- en for markdown pages english
- xx for markdown pages valid for both languages (should be rare)


i.e. be of the form `somepage.fr.md` or `someotherpage.en.mdx`

For `js(x)` pages the component can access the language directly and decide what to do with it.

# For devs

See the [TODO](./TODO.md) and [dev notes](./DEVNOTES.md)
