import React from "react";
import css from "./NavGroup.module.css"
import { Link } from "gatsby"

const NavGroup = ({title,links}) =>
{
    return <div className={css.NavGroup}>
        {!!title && <h4 className={css.h4}>{title}</h4>}
        <ul className={css.ul}>
            {!!links && links.map(l=>(<li key={l.label}><Link to={l.to}>{l.label}</Link></li>))}
            </ul>
    </div>
}

export default NavGroup
