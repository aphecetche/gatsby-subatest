import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

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

SeminarLink.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
}
export default SeminarLink
