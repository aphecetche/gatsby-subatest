import React from "react"
import SeminarLink from "./seminar-link"

const SeminarList = ({ seminars }) => (
  <>
    {(seminars && seminars.map((n) => <SeminarLink key={n.slug} {...n} />)) ||
      null}
  </>
)

export default SeminarList
