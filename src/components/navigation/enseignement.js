import React from "react"
import { Link } from "gatsby"

const NavEnseignement = () => (
    <>
        <h2>Enseignement</h2>
        <ul>
            <li><Link to="/enseignement/enseignement">Présentation</Link></li>
            <li><Link to="/enseignement/propositions-de-stages">Propositions de stages (*)</Link></li>
            <li><span className="separator">Masters</span>
                <ul>
                    <li><Link to="/enseignement/masterars">PFA</Link>
                    </li>
                    <li><a href="https://www.imt-atlantique.fr/formation/masters/masters-science/sustainable-nuclear-engineering-applications-and-management-sneam">SNEAM</a></li>
                </ul>
            </li>
            <li><span className="separator">Options IMTA</span>
                <ul>
                    <li><a href="http://www.mines-nantes.fr/Formations/Ingenieur/Annee-3-Options/NTSE-Nucleaire-Technologies-Surete-et-Environnement">NTSE (*)</a></li>
                    <li><a href="http://www.mines-nantes.fr/Formations/Ingenieur/Annee-3-Options/STAR-Systemes-et-Technologies-Associes-aux-Reacteurs-nucleaires">STAR (*)</a></li>
                </ul>
            </li>
        </ul>
    </>
)

export default NavEnseignement
