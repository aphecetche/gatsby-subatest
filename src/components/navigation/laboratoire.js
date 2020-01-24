import React from "react"
import { Link } from "gatsby"

const NavLaboratoire = () => (
    <>
        <h2>Le laboratoire</h2>
    <ul>
        <li><span class="separator ">Nos activités</span>
            <ul>
                <li><Link to="/general/actualites">Actualités</Link></li>
                <li><Link to="/general/presentation">Présentation</Link></li>
                <li><Link to="/services-techniques-et-administration/administration/organigramme">Organigramme</Link></li>
                <li><Link to="/general/conseil-scientifique">Conseil scientifique</Link></li>
            </ul>
        </li>
        <li><span class="separator ">Administration</span>
            <ul>
                <li><Link to="/services-techniques-et-administration/administration/presentation">Présentation</Link></li>
                <li><Link to="/services-techniques-et-administration/administration/missions">Informations missions</Link></li>
                <li><Link to="/services-techniques-et-administration/administration/ressources-humaines">Informations ressources humaines</Link></li>
            </ul>
        </li>
        <li><span class="separator ">Venir à Subatech</span>
            <ul>
                <li><Link to="/services-techniques-et-administration/administration/venir-a-subatech">Accès</Link></li>
                <li><Link to="/services-techniques-et-administration/administration/hebergement">Hébergement</Link></li>
                <li><Link to="/stages-d-observation">Stages d'observation (*)</Link></li>
            </ul>
        </li>
    </ul>
    </>
)

export default NavLaboratoire
