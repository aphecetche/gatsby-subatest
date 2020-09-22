import React from "react"
const DevOnly = ({ children, className }) => {
  if (process.env.NODE_ENV === "development") {
    return <div className={className}>{children}</div>
  }
  return null
}

export default DevOnly
