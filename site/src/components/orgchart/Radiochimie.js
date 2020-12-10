import React from "react"
import Division from "./Division"
import Team from "./team"

const Radiochimie = () => (
  <Division title="Radiochimie">
    <Team
      name="Radiochimie"
      leader="A. Abdelouas"
      link="/fr/recherche/radiochimie/presentation"
    />
    <Team name="SMART" leader=" " link="/fr/recherche/smart/presentation" />
  </Division>
)

export default Radiochimie
