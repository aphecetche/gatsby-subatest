import React from "react"
import createPersistedState from 'use-persisted-state'
import NavGroup from "./navigation/NavGroup"
import css from "./navigation.module.css"
import Superlink  from "./Superlink"
import jsonNav from "./navigation.json"
import BigMenu from "./navigation/BigMenu"

const PrimaryNavigation = ( {links,active,setActive} )=> (
    <nav aria-label="Main" className={css.main}>
        <ul>
            {links.map(x=>(<li key={x.label}
                className={x.label==active ? css.active:""}>
                <Superlink to={x.to} onClick={(event)=>{
                    event.preventDefault(); 
                    x.label == active ? setActive(""): setActive(event.target.innerHTML); }}>
                    {x.label}</Superlink>
            </li>))}
        </ul>
    </nav>
)

const SecondaryNavigation = ({data,active,setActive}) => {

    const onClose = (event)=>{event.preventDefault(); setActive("");}
    return (
    <nav aria-label="Secondary" className={css.secondary}>
        <ul>
            {data.map(x=>{
                const hidden = (x.title!==active) ? css.hidden:""
                return (<li key={x.title} className={hidden}>
                    <BigMenu title={x.title} groups={x.groups} onClose={onClose}/></li>)})}
            </ul>
        </nav>
    )

}

const useActiveState = createPersistedState('active')

const Navigation = () => {
    const [active,setActive] = useActiveState()
    let primary = jsonNav.map(x=>{ return { "label": x.title, "to": x.to }})

    return (
        <>
        <PrimaryNavigation links={primary} active={active} setActive={setActive}
        />
        <SecondaryNavigation aria-hidden="true" data={jsonNav} active={active}
            setActive={setActive} />
        </>
    )
}
export default Navigation
