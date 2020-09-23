import React from "react"
import org from "./orgchart.yaml"

const Person = ({ name, link }) => {
  return link ? <a href={link}>{name}</a> : <span>{name}</span>
}

const parseKeys = (o) => {
  const keys = Object.keys(o)

  const items = keys.map((k) => {
    if (typeof o[k] === "string") {
      return <li>{o[k]}</li>
    } else {
      return (
        <>
          <li>{k}</li>
          <ul key={`sub${k}`}>{parseKeys(o[k])}</ul>
        </>
      )
    }
  })
  return <ul>{items}</ul>
}

const OrgChart = () => {
  const json = JSON.stringify(org, null, 4)

  const l1 = parseKeys(org)

  return (
    <>
      <h2>Parsed</h2>
      {l1}
      <h2>JSON</h2>
      <pre>{json}</pre>
    </>
  )
}

export default OrgChart
