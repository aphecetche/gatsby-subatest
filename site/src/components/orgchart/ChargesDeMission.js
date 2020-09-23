import React from "react"
import Division from "./Division"
import OrgItem from "./OrgItem"

const ChargesDeMission = () => (
  <Division title="Chargé(e)s de mission">
    <OrgItem headline="Communication" link="/fr/comm" />
    <OrgItem headline="Web" link="/" />
    <OrgItem headline="Séminaires" link="/fr/seminaires" />
    <OrgItem headline="Enseignement/Université" />
    <OrgItem headline="Master PFA" />
    <OrgItem headline="Enseignement IMT Atlantique" />
    <OrgItem headline="Option ingénierie nucléaire" />
    <OrgItem headline="Master NE/SARENA" />
    <OrgItem headline="Projects européens" />
    <OrgItem headline="CSSI" />
    <OrgItem headline="Qualité" />
  </Division>
)

export default ChargesDeMission
