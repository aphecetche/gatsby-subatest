import React, { useEffect } from "react"
import { useTranslation as useT } from "react-i18next"
import { usePageContext } from "../../page-context"
import PropTypes from "prop-types"

const MissingTranslation = ({ value }) => {
  const msg = `Missing translation for ${value}`
  return (
    <p
      style={{
        color: "red",
        border: "2px solid red",
        background: "yellow",
        padding: "8px",
      }}
    >
      {msg}
    </p>
  )
}

MissingTranslation.propTypes = {
  value: PropTypes.string,
}

const useTranslation = () => {
  const { language } = usePageContext()
  const { t: u, i18n } = useT()
  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])
  return {
    ...u,
    t: (msgid, values) => {
      if (!i18n.exists(msgid)) {
        if (i18n.language === "fr") {
          return msgid
        }
        return <MissingTranslation value={msgid} />
      }
      return u(msgid, values)
    },
    i18n,
  }
}

const getTranslatedContent = (nodes, locale) => {
  const node = nodes.filter((n) => n.language === locale || n.language === "xx")
  return { node: node.length > 0 ? node[0].node : null }
}

/* ensure the slug is starting with /fr or /en */
const localizeSlug = (url, language = "fr") => {
  if (url && url.match(/^\//) && !url.match(/^\/fr/) && !url.match(/^\/en/)) {
    return "/" + language + url
  }
  return url
}
export { getTranslatedContent, useTranslation, localizeSlug }
