import React from "react"
//import { Link } from "gatsby"
import NavLaboratoire from "./navigation/laboratoire"
import NavRecherche from "./navigation/recherche"
import NavEnseignement from "./navigation/enseignement"
import NavCommunication from "./navigation/communication"
import NavTechniques from "./navigation/techniques"
import NavSmart from "./navigation/smart"
import NavContact from "./navigation/contact"

const Navigation = ({a}) => (
      <ul>
          <li><NavLaboratoire /></li>
          <li><NavRecherche /></li>
          <li><NavEnseignement /></li>
          <li><NavCommunication /></li>
          <li><NavTechniques /></li>
          <li><NavSmart /></li>
          <li><NavContact /></li>
      </ul>
    )

export default Navigation
