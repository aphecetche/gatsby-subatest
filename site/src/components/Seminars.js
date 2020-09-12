import React from "react"
import { useTranslation } from "gatsby-theme-intl"

const Seminars = () => {
  const { t } = useTranslation()
  const what = t("séminaires").toLowerCase()
  const msg = t("future_list", { what })
  return <p>{msg}</p>
}

export default Seminars
