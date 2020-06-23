import React from "react"
import NavGroup from "./NavGroup"

export default {
  component: NavGroup,
  title: "NavGroup",
}

export const Empty = () => {
  return <NavGroup />
}

export const OnlyTitle = () => {
  return <NavGroup title="Just a title here" />
}

export const NoTitle = () => {
  const links = [
    { to: "#", label: "link1" },
    { to: "#", label: "link2" },
    { to: "#", label: "link3" },
  ]
  return <NavGroup links={links} />
}

export const Default = () => {
  const links = [
    { to: "#", label: "link1" },
    { to: "#", label: "link2" },
    { to: "#", label: "link3" },
    { to: "#", label: "link4" },
    { to: "#", label: "link5" },
  ]
  return <NavGroup title="Nav Group Title" links={links} />
}
