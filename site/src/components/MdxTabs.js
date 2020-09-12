import PropTypes from "prop-types"
import React, { useState } from "react"
import clsx from "clsx"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Tab } from "@material-ui/core"
import { TabPanel, TabContext, TabList } from "@material-ui/lab"
import withStyles from "@material-ui/styles/withStyles"
import { useTranslation } from "gatsby-theme-intl"

export const styles = () => ({
  root: {},
  tablist: {},
  tab: {},
  tabpanel: {},
})

const MdxTabs = (props) => {
  const { data, ariaLabel, classes, className } = props
  const [value, setValue] = useState("0")
  const nodes = data.edges
  const { t } = useTranslation()
  const head = nodes.map((n, i) => (
    <Tab
      className={clsx(classes.tab)}
      key={n.node.id}
      value={i.toString()}
      label={t(n.node.frontmatter.title)}
    />
  ))

  const panels = nodes.map((n, i) => (
    <TabPanel
      className={clsx(classes.tabpanel)}
      value={i.toString()}
      key={n.node.id}
    >
      <MDXRenderer>{n.node.body}</MDXRenderer>
    </TabPanel>
  ))

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className={clsx(classes.root, className)}>
      <TabContext value={value}>
        <TabList
          className={clsx(classes.tablist)}
          variant="fullWidth"
          onChange={handleChange}
          aria-label={ariaLabel}
        >
          {head}
        </TabList>
        {panels}
      </TabContext>
    </div>
  )
}

MdxTabs.propTypes = {
  data: PropTypes.object,
  classes: PropTypes.object,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
}

export default withStyles(styles)(MdxTabs)
