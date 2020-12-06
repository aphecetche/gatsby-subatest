const validFilePath = (slug) => {
  const re = /(\.en\/$)|(\.fr\/$)|(\.xx\/$)/
  return slug.search(re) >= 0
}
const extractLanguage = (slug) => {
  const s = slug.replace(/\/$/, "").split(".")
  const language = s[s.length - 1]
  const unlocalized = slug.replace("." + language, "")
  return { language, unlocalized }
}

/* ensure the slug is starting with /fr or /en */
const localizeSlug = (slug, language = "fr") => {
  if (slug.match(/^\//) && !slug.match(/^\/fr/) && !slug.match(/^\/en/)) {
    return "/" + language + slug
  }
  return slug
}

module.exports = { validFilePath, extractLanguage, localizeSlug }
