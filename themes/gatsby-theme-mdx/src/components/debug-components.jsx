/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react"

const CustomLink = (props) => {
  const external = /^http/
  const re = /(^index\.php)|(article?)/
  if (props.href && re.test(props.href) && !external.test(props.href)) {
    return (
      <div style={{ color: "red" }}>
        <a {...props} />
        !!!
      </div>
    )
  } else {
    return <a {...props} />
  }
}

const DebugComponents = {
  a: CustomLink,
}

export default DebugComponents
