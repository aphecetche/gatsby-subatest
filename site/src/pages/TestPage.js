import React from "react"
import { graphql } from "gatsby"
import MdxTabs from "components/MdxTabs"

const TestPage = ({ data }) => {
  console.log("data=", data)
  return (
    <>
      <h1>TestPage</h1>
      <MdxTabs data={data.axe} ariaLabel="Axes de recherche" />
      <MdxTabs data={data.cst} arialLabel="CST" />
      <footer>custom footer</footer>
    </>
  )
}

export const query = graphql`
  query {
    axe: allMdx(filter: { frontmatter: { category: { regex: "/Axe/" } } }) {
      edges {
        node {
          id
          frontmatter {
            category
            title
          }
          body
        }
      }
    }
    cst: allMdx(filter: { frontmatter: { category: { regex: "/cst/" } } }) {
      edges {
        node {
          id
          frontmatter {
            category
            title
          }
          body
        }
      }
    }
  }
`

export default TestPage
