import React from "react"
import { useTranslation } from "gatsby-theme-intl"
import PropTypes from "prop-types"

const Jobs = ({ phds }) => {
  const { t } = useTranslation()
  let what = phds ? t("offres de thèses") : t("offres d'emploi")
  what = what.toLowerCase()
  const msg = t("future_list", { what })
  return <p>{msg}</p>
}

Jobs.propTypes = {
  phds: PropTypes.bool,
}
export default Jobs
