module.exports = ({ page, actions, reporter }) => {
  const { createPage, deletePage } = actions

  if (!page.context.language) {
    // we don't have a language
    // so we must create versions for both translations

    reporter.info(`site on-create-page : dealing with page ${page.path}`)
    deletePage(page)

    const routes = ["", "/fr", "/en"]
    routes.forEach((r) => {
      const path = r + page.path
      const newPage = {
        ...page,
        path: path,
        context: {
          ...page.context,
          slug: path,
          language: r ? r.replace(/\//, "") : "fr",
          // by default we assume that pages can handle both languages
          // TODO: how to disable some languages for some (non-mdx) pages ?
          translations: ["fr", "en"],
        },
      }
      createPage(newPage)
    })
  }
}
