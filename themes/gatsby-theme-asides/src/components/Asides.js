import React, { Suspense } from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";

const createComponent = (componentName) => {
  const Component = React.lazy(() => import(`components/${componentName}.js`));
  return Component;
};

const Asides = ({ slug, regexp }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { aside: { eq: true } } }) {
        edges {
          node {
            fileAbsolutePath
            body
            frontmatter {
              component
            }
          }
        }
      }
    }
  `);

  const re = new RegExp(regexp);
  const asides = data.allMdx.edges.filter((n) =>
    n.node.fileAbsolutePath.match(re)
  );

  return (
    <Suspense fallback=<p>Loading...</p>>
      {asides.map((m) => {
        const Component = m.node.frontmatter.component
          ? createComponent(m.node.frontmatter.component)
          : MDXRenderer;
        return (
          <aside key={m.node.fileAbsolutePath}>
            <Component slug={slug}>{m.node.body}</Component>
          </aside>
        );
      })}
    </Suspense>
  );
};

Asides.propTypes = {
  regexp: PropTypes.string.isRequired,
};
export default Asides;
