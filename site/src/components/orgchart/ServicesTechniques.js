import React from "react"
import Division from "./Division"
import Service from "./Service"
import Administration from "./Administration"

const ServicesTechniques = () => (
  <Division title="Services techniques et administraton">
    <Service
      name="Informatique"
      leader="K. Chawoshi"
      link="/fr/services-techniques-et-administration/informatique/presentation"
    />
    <Service
      name="Mécanique"
      leader="JM. Buhour, A. Cadiou par intérim"
      link="/fr/services-techniques-et-administration/mecanique/presentation"
    />
    <Service
      name="Electronique"
      leader="F. Lefèvre"
      link="/fr/services-techniques-et-administration/electronique/presentation"
    />
    <Service
      name="Prévention des risques / Infrastructure"
      leader="R. Berny"
      link="/fr/radioprotection"
    />
    <Administration />
  </Division>
)

export default ServicesTechniques
