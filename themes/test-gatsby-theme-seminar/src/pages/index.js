/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { SeminarsInRange } from "gatsby-theme-seminar"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <>
      <h1>Séminaires</h1>
      <h2>récents et à venir</h2>
      <SeminarsInRange />
      <h2>tous les séminaires</h2>
      <Link to="/seminars">C'est par ici...</Link>
    </>
  )
}

export default IndexPage
