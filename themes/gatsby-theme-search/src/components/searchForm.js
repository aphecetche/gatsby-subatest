import React from "react"
import { navigate } from "gatsby"
// import css from "./search.module.css"
import PropTypes from "prop-types"

const SearchForm = ({ query }) => (
  <form role="search" method="GET">
    <label htmlFor="search-input">
      <h1>Rechercher sur le site</h1>
    </label>
    <input
      type="search"
      id="search-input"
      name="keywords"
      onChange={(e) =>
        navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)
      }
      value={query}
    />
    <button type="submit">Submit</button>
  </form>
)

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
}

export default SearchForm
