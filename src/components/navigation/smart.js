import React from "react"
import { Link } from "gatsby"

const NavSmart = () => (
    <>
        <h2>Smart</h2>
            <ul>
                <li><span className="separator ">Le service SMART</span>
                    <ul>
                        <li><Link to="/smart/presentation">Présentation</Link></li>
                        <li><Link to="/smart/moyens-humains">Moyens humains</Link></li>
                        <li><Link to="/smart/techniques-et-equipements">Techniques et équipements</Link></li>
                        <li><Link to="/smart/accreditations-et-agrements">Accréditations et agréments</Link></li>
                    </ul>
                </li>
                <li><span className="separator ">Nos prestations</span>
                    <ul>
                        <li><Link to="/smart/prelevements">Prélèvements</Link></li>
                        <li><Link to="/smart/pre-traitements">Pré-traitements</Link></li>
                        <li><Link to="/smart/detection-des-rayonnements">Détection des rayonnements</Link></li>
                        <li><Link to="/smart/nature-des-echantillons-et-des-prestations">Nature des échantillons et des prestations</Link></li>
                        <li><Link to="/smart/actions-r-d">Actions R &amp; D</Link></li>
                    </ul>
                </li>
                <li><Link to="/smart/contact">Contact</Link></li>
                <li><Link to="/smart/nos-partenaires">Liens</Link></li>
            </ul>
</>
)

export default NavSmart
