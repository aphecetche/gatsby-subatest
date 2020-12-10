import React from "react"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { useTranslation, usePageContext, localizeUrl } from "gatsby-theme-intl"
import { navigate } from "gatsby"

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
  },
  label: {},
}))

const Language = () => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()
  const { translations, slug, language: currentLanguage } = usePageContext()
  const alternate = currentLanguage === "fr" ? "en" : "fr"
  let disabled = true
  if (translations) {
    disabled = !translations.includes(alternate)
  }
  const lslug = localizeUrl(slug)
  const re = new RegExp(`^/${currentLanguage}/`)
  const target = lslug.replace(re, `/${alternate}/`)

  return (
    <Button
      classes={classes}
      color="primary"
      size="small"
      disableRipple
      disabled={disabled}
      onClick={() => {
        i18n.changeLanguage(alternate)
        navigate(target)
      }}
    >
      {t("changer_de_langue")}
    </Button>
  )
}

export default Language
