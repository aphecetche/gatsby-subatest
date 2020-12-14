import React from "react"
import Division from "./division"
import Team from "./team"

const Physique = () => (
  <Division title="Physique">
    <Team
      name="Plasma"
      leader="M. Germain"
      link="/fr/recherche/plasma/presentation-groupe-plasma"
    />
    <Team
      name="Théorie"
      leader="T. Gousset"
      link="/fr/recherche/theorie/presentation"
    />
    <Team
      name="Prisma"
      leader="A. Guertin"
      link="/fr/recherche/prisma/presentation"
    />
    <Team
      name="Structure et énergie nucléaires"
      leader="M. Fallot"
      link="/fr/recherche/sen/presentation"
    />
    <Team
      name="Xénon"
      leader="D. Thers"
      link="/fr/recherche/xenon/presentation"
    />
    <Team
      name="Neutrino"
      leader="B. Viaud"
      link="/fr/recherche/neutrino/presentation"
    />
  </Division>
)
export default Physique
