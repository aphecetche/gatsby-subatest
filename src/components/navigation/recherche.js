import React from "react"
import { Link } from "gatsby"
import PdfDocument from "../../components/pdfdocument"

const NavRecherche = () => (
    <>
        <h2>Recherche</h2>
      <ul>
        <li><Link to="/recherche/recherche">Présentation</Link></li>
        <li><PdfDocument to="/images/Recherche/SUBATECH2009.pdf" title="Rapport d'activités" /></li>
        <li><PdfDocument to="/images/Recherche/SUBATECH2009addendum.pdf" title="Addendum au rapport d'activités"/></li>
        <li><a href="http://hal.in2p3.fr/SUBATECH/">Production scientifique</a></li>
        <li><span class="separator ">Nucléaire et environnement</span>
          <ul>
              <li><Link to="/recherche/radiochimie/radiochimie-presentation">Radiochimie</Link></li>
              <li><Link to="/recherche/prisma/presentation">Prisma</Link></li>
              <li><Link to="/recherche/sen/erdre-presentation">SEN</Link></li>
          </ul>
        </li>
        <li><span class="separator ">Nucléaire et santé</span>
          <ul>
            <li><Link to="/recherche/xenon/presentation">Xénon</Link>
            </li>
            <li><Link to="/recherche/prisma/presentation">Prisma</Link>
            </li>
            <li><Link to="/recherche/radiochimie/radiochimie-presentation">Radiochimie</Link>
            </li>
          </ul>
        </li>
        <li><span class="separator ">Univers à haute énergie</span>
          <ul>
            <li><Link to="/recherche/plasma/presentation-groupe-plasma">Plasma</Link>
            </li>
            <li><Link to="/recherche/astro/astro-presentation">Astro</Link>
            </li>
            <li><Link to="/recherche/sen/erdre-presentation">SEN</Link>
            </li>
            <li><Link to="/recherche/xenon/presentation">Xénon</Link>
            </li>
            <li><Link to="/recherche/theorie/theoriehe-presentation">Théorie</Link>
            </li>
            <li><Link to="/recherche/neutrino/neutrino-presentation">Neutrino</Link>
            </li>
          </ul>
        </li>
      </ul>
  </>
)

export default NavRecherche
