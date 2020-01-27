import React from "react"
import css from "./MainMenuElement.module.css"

const MainMenuElement = ({title,children}) => {
    return <div className={css.MainMenuElement}>
        {!!title && <h4 className={css.h4}>{title}</h4>}
            <ul className={css.ul}>
        {React.Children.map(children,c=><li className={css.li}>{c}</li>)}
            </ul>
                </div>
}

export default MainMenuElement
