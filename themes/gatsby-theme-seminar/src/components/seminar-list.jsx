import React from "react"
import SeminarLink from "./seminar-link"

const SeminarList = ({ seminars }) => (
  <>
    {seminars.map((n) => (
      <SeminarLink key={n.slug} {...n} />
    ))}
  </>
)

export default SeminarList
