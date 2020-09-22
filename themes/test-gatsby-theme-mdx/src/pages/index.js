import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <>
      <p>This is IndexPage</p>
      <Img fluid={data.univ.childImageSharp.fluid} />
    </>
  );
};

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    univ: file(relativePath: { eq: "logo_univ_nantes.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage;
