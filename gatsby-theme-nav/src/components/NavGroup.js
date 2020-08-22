import React from "react";
import css from "./navgroup.module.css";
import Superlink from "./Superlink";

const NavGroup = ({ title, links }) => {
  return (
    <div className={css.navgroup}>
      {!!title && <h4 className={css.title}>{title}</h4>}
      <ul className={css.linklist}>
        {!!links &&
          links.map((l) => (
            <li key={l.label}>
              <Superlink to={l.to}>{l.label}</Superlink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavGroup;
