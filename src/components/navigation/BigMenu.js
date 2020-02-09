import React from "react"
import NavGroup from "./NavGroup"
import css from "./bigmenu.module.css"

const BigMenu = ({title,groups}) => (
    <div className={css.bigmenu}>
        <h4 className={css.title}>{title}</h4>
        <ul className={css.navgrouplist}>
            {!!groups && groups.map(x=><li key={x.links[0].label}><NavGroup title={x.title} links={x.links}/></li>)}
        </ul>
    </div>
)

export default BigMenu
