/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react"
import ErrorIcon from "@material-ui/icons/Error"

const CustomLink = (props) => {
  const external = /^http/
  const re = /(^index\.php)|(article?)/
  if (props.href && re.test(props.href) && !external.test(props.href)) {
    return (
      <>
        <a {...props} />
        <ErrorIcon color="error" fontSize="large" />
      </>
    )
  } else {
    return <a {...props} />
  }
}

const DebugComponents = {
  a: CustomLink,
}

export default DebugComponents
