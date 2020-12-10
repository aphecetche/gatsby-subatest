import React from "react"
import Division from "./division"
import Role from "./role"

const Direction = () => (
  <Division title="Direction">
    <Role title="Directeur" name="G. Martinez" />
    <Role title="Directeur adjoint" name="PB. Gossiaux" />
    <Role
      title="Directrice administrative"
      name="I. Ollitrault"
      link="/fr/services-techniques-et-administration/administration/presentation/"
    />
    <Role title="Directeur technique" name="J.-L. Béney" />
    <Role title="Secrétariat de direction" name="F. Alibay, S. Bénac" />
  </Division>
)

export default Direction
