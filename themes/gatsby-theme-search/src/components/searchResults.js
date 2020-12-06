import React from "react";
import { Link } from "gatsby";

const SearchResults = ({ results, query }) => {
  if (!results.length) {
    return null;
  } else {
    return (
      <section aria-label="Search results for all posts">
        <h2 aria-live="polite">
          {results.length} articles trouvés à propos de &quot;{query}&quot;
        </h2>
        <ul>
          {results.map(({ title, slug, excerpt }) => (
            <li key={slug}>
              <h3>
                <Link to={slug}>{title}</Link>
              </h3>
              <p>{excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
};

export default SearchResults;
