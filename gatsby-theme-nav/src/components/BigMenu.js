import React from "react";
import NavGroup from "./NavGroup";
import css from "./bigmenu.module.css";
import CloseButton from "./closebutton";

const BigMenu = ({ title, groups, onClose }) => (
  <div className={css.bigmenu}>
    <div className={css.title}>
      <h4>{title}</h4>
      <CloseButton onClick={onClose}>Fermer</CloseButton>
    </div>
    <ul className={css.navgrouplist}>
      {!!groups &&
        groups.map((x) => (
          <li key={x.links[0].label}>
            <NavGroup title={x.title} links={x.links} />
          </li>
        ))}
    </ul>
  </div>
);

export default BigMenu;
