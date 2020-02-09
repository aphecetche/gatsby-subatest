import React from "react"
import NavGroup from "./navigation/NavGroup"
import css from "./navigation.module.css"
import { Link } from "gatsby"
import jsonNav from "./navigation.json"

const BigMenu = ({title,groups}) => (
    <div>
        <h4>{title}</h4>
        <ul>
            {!!groups && groups.map(x=><li key={x.links[0].label}><NavGroup title={x.title} links={x.links}/></li>)}
        </ul>
    </div>
)


const PrimaryNavigation = ( {links,active} )=> (
        <nav aria-label="Main" className={css.main}>
            <ul>
                {links.map(x=>(<li key={x.label} 
                    className={x.label==active ? css.active:""}>
                    <Link to={x.to}>
                        {x.label}</Link>
                </li>))}
            </ul>
        </nav>
)

const SecondaryNavigation = ({data}) => ( 
        <nav aria-label="Secondary">
            <ul>
                {jsonNav.map(x=>(<li key={x.title}><BigMenu title={x.title} groups={x.groups}/></li>))}
            </ul>
        </nav>
)


const Navigation = ({active}) => {
    let primary = jsonNav.map(x=>{ return { "label": x.title, "to": x.to }})

    //    primay.append({ "title":"zobby"})

    return (
        <>
        <PrimaryNavigation links={primary} active={active} />
        {/* <BigMenu title={bigmenu.title} groups={bigmenu.groups}> */}
        </>
)
}
export default Navigation
