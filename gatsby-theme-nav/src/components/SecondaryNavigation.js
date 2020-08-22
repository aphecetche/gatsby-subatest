import React from "react";
import BigMenu from "./BigMenu";
import css from "./navigation.module.css";

const SecondaryNavigation = ({ data, active, setActive }) => {
  const onClose = (event) => {
    event.preventDefault();
    setActive("");
  };
  return (
    <nav aria-label="Secondary" className={css.secondary}>
      <ul>
        {data.map((x) => {
          const activeClass = x.title === active ? css.active : "";
          return (
            <li key={x.title} className={activeClass}>
              <BigMenu title={x.title} groups={x.groups} onClose={onClose} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

//export default SecondaryNavigation;
export default () => null;
