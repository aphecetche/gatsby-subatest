import React from "react"
import SeminarList from "./seminar-list"

const Seminars = ({ data }) => {
  const seminars = data.allSeminar.nodes
  return (
    <main>
      <SeminarList seminars={seminars} />
    </main>
  )
}

export default Seminars
