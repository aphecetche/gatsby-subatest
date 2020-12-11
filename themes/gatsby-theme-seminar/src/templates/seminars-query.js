import { graphql } from "gatsby"

import Seminars from "../components/seminars"

export default Seminars

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
