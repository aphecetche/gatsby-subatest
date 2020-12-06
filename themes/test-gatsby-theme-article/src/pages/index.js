import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <ul>
      <p>
        Liste de <Link to="/en/articles/">tous les articles</Link>
      </p>
      <p>
        Liste des articles de la{" "}
        <Link to="/blabla-articles">catégorie blabla</Link>
      </p>
    </ul>
  )
}

export default IndexPage
