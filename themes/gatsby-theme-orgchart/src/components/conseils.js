import React from "react"
import Division from "./division"
import OrgItem from "./org-item"

const Conseils = () => (
  <Division title="Conseils">
    <OrgItem
      link="fr/general/conseil-scientifique"
      headline="Conseil scientifique"
    />
    <OrgItem headline="Conseil de laboratoire" />
    <OrgItem headline="Commission consultative paritaire interne" />
    <OrgItem headline="CPSI" />
  </Division>
)

export default Conseils
