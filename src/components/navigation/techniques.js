import React from "react"
import { Link } from "gatsby"

const NavTechniques = () => (
    <>
    <h2>Techniques</h2>
    <ul>
        <li><Link to="/services-techniques-et-administration/services-techniques">Présentation</Link></li>
        <li><Link to="/services-techniques-et-administration/informatique/service-informatique">Informatique</Link>
        </li>
        <li><Link to="/services-techniques-et-administration/electronique/service-electronique">Electronique</Link>
        </li>
        <li><Link to="/services-techniques-et-administration/mecanique/presentation">Mécanique</Link>
        </li>
    </ul>
    </>
)

export default NavTechniques
