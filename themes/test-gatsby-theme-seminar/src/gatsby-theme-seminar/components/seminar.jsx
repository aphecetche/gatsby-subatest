import React from "react"
import BaseSeminar from "gatsby-theme-seminar/src/components/seminar"

const Seminar = (props) => {
  return (
    <div style={{ border: "5px solid tomato" }}>
      <BaseSeminar {...props} />
    </div>
  )
}

export default Seminar
