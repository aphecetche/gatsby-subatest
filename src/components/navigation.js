import React from "react"
import NavGroup from "./navigation/NavGroup"
import css from "./navigation.module.css"
import Superlink  from "./Superlink"
import jsonNav from "./navigation.json"
import BigMenu from "./navigation/BigMenu"

const PrimaryNavigation = ( {links,active} )=> (
    <nav aria-label="Main" className={css.main}>
        <ul>
            {links.map(x=>(<li key={x.label}
                className={x.label==active ? css.active:""}>
                <Superlink to={x.to}>
                    {x.label}</Superlink>
            </li>))}
        </ul>
    </nav>
)

const SecondaryNavigation = ({data,active}) => (
    <nav aria-label="Secondary" className={css.secondary}>
        <ul>
            {data.map(x=>{
                if (x.title!==active) return null
                return (<li key={x.title}><BigMenu title={x.title} groups={x.groups}/></li>)})}
            </ul>
        </nav>
)


const Navigation = ({active}) => {
    let primary = jsonNav.map(x=>{ return { "label": x.title, "to": x.to }})

    return (
        <>
        <PrimaryNavigation links={primary} active={active} />
        <SecondaryNavigation data={jsonNav} active={active} />
        </>
    )
}
export default Navigation
