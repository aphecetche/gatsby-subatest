import  React, { useState } from "react"
import css from "./navigation.module.css"
import Superlink  from "./Superlink"
import jsonNav from "./navigation.json"
import BigMenu from "./navigation/BigMenu"

const PrimaryNavigation = ( {links,active,setActive} )=> (
    <nav aria-label="Main" className={css.main}>
        <ul>
            <li><Superlink to="/" className={css.logo} /></li>
            {links.map(x=>(<li key={x.label}
                className={x.label===active ? css.active:""}>
                <Superlink to={x.to} onClick={(event)=>{
                    event.preventDefault();
                    x.label === active ? setActive(""): setActive(event.target.innerHTML); }}>
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
                    const activeClass = (x.title===active) ? css.active:""
                    return (<li key={x.title} className={activeClass}>
                        <BigMenu title={x.title} groups={x.groups} onClose={onClose}/></li>)})}
                </ul>
            </nav>
    )

}


const Navigation = () => {
    const [active,setActive] = useState('')
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
