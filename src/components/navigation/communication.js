import React from "react"
import { Link } from "gatsby"
import NavGroup from "./NavGroup"

const NavCommunication = () => {
    const links = [
        { "to":"/communication/communication", "label": "Présentation"},
        { "to":"/communication/seminaires", "label": "Séminaires (*)"},
        { "to":"/communication/vulgarisation", "label": "Vulgarisation (*)"},
        { "to":"/bibliotheque/bibliotheque","label":"Bibliothèque"},
        { "to":"/communication/archives", "label": "Archives (*)"}
    ]
    return  <NavGroup title="Communication" links={links} />
}

export default NavCommunication
