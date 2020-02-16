import React from "react"
import css from "./closebutton.module.css"

const CloseButton = ({onClick,children}) => (
    <button className={css.close} onClick={onClick}>
        {children}
    </button>
)

export default CloseButton;
