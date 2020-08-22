import React from "react";
import Superlink from "./Superlink";
import { makeStyles } from "@material-ui/core/styles";
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles((theme) => ({
  main: {
    color: theme.palette.primary.main,
    "& ul": {
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      margin: 0,
      "& li": {
        margin: 0,
        padding: 0,
        "& a": {
          userSelect: "none",
          display: "block",
          color: "currentColor",
          textDecoration: "none",
          padding: "0.25rem 0.5rem",
          borderBottom: "2px solid transparent",
          "&:not([href])": {
            cursor: "pointer",
          },
          "&:hover": {
            borderBottom: "2px solid currentColor",
          },
        },
      },
    },
  },
  logo: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: (props) => `url(${props.logoUrl})`,
    width: (props) => `${props.logoWidth}`,
    height: (props) => `${props.logoHeight}`,
  },
  active: { color: theme.palette.secondary.main },
}));

const PrimaryNavigation = ({ links, active, setActive }) => {
  const logo = useStaticQuery(graphql`
    {
      allFile(filter: { base: { regex: "/logo/" } }) {
        nodes {
          publicURL
        }
      }
    }
  `).allFile.nodes[0];
  const css = useStyles({
    logoUrl: logo.publicURL,
    logoWidth: "135px",
    logoHeight: "48px",
  });
  return (
    <nav aria-label="Main" className={css.main}>
      <ul>
        <li className={css.logo}>
          <Superlink to="/" />
        </li>
        {links.map((x) => (
          <li key={x.label} className={x.label === active ? css.active : ""}>
            <Superlink
              to={x.to}
              onClick={(event) => {
                event.preventDefault();
                x.label === active
                  ? setActive("")
                  : setActive(event.target.innerHTML);
              }}
            >
              {x.label}
            </Superlink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
