import React from "react"
import { Router, Redirect } from "@reach/router"

const IndexPage = () => (
  <Router>
    <Redirect noThrow from="/" to="/general/presentation" />
  </Router>
)

export default IndexPage
