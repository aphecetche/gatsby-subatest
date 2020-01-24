import React from "react"
import { Link } from "gatsby"

const NavCommunication = () => (
    <>
        <h2>Communication</h2>
      <ul>
        <li><Link to="/communication/communication">Présentation</Link></li>
        <li><Link to="/communication/seminaires">Séminaires (*)</Link></li>
        <li><Link to="/communication/vulgarisation">Vulgarisation (*)</Link></li>
        <li><Link to="/bibliotheque/bibliotheque">Bibliothèque</Link></li>
        <li><Link to="/communication/archives">Archives (*)</Link></li>
      </ul>
    </>
)

export default NavCommunication
