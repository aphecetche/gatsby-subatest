import React from "react"
import { useTranslation } from "gatsby-theme-intl"

const Events = () => {
  const { t } = useTranslation()
  const what = t("événements").toLowerCase()
  const msg = t("future_list", { what })
  return <p>{msg}</p>
}

export default Events
