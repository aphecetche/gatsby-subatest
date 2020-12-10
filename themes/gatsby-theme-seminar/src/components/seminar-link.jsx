import React from "react"
import { Link } from "gatsby"

const SeminarLink = ({ title, slug, author, date }) => (
  <article>
    <header>
      <h2>
        <Link to={slug}>{title || slug}</Link>
      </h2>
      <small>{date}</small>
    </header>
    <section>
      <p>{author}</p>
    </section>
  </article>
)

export default SeminarLink
