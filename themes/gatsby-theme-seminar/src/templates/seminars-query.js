import { graphql } from "gatsby"

import SeminarsPage from "../components/seminars-page"

export default SeminarsPage

export const query = graphql`
  query SeminarsPageLayout {
    allSeminar(sort: { fields: [date, title], order: DESC }, limit: 500) {
      nodes {
        id
        slug
        date
        author
        title
      }
    }
  }
`
