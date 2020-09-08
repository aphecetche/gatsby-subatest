import React from "react"

const Jobs = ({ phds }) => {
  let text = "list of job offers will go here"

  if (phds) {
    text = "list of PhDs will go here"
  }
  return <p>{text}</p>
}

export default Jobs
