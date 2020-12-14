import { graphql } from "gatsby"

import SeminarPage from "../components/seminar-page"

export default SeminarPage

export const query = graphql`
  query SeminarPageLayout($id: String!) {
    seminar(id: { eq: $id }) {
      id
      title
      title2
      layout
      author
      author_url
      author2
      author_url2
      date
      location
      type
      author_filiation
      author_filiation_url
      author_filiation2
      author_filiation_url2
      body
      slug
    }
  }
`
