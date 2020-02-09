import React from "react"
import { Link } from "gatsby"

import MainMenuElement from "./MainMenuElement"

export default {
    component: MainMenuElement,
    title: "Main Menu Element"
}

export const Empty = () => {
    return <MainMenuElement />
}

export const OnlyTitle = () => {
    return <MainMenuElement title="Just a title here" />
}

export const NoTitle = () => (
    <MainMenuElement>
        <Link to="#">Link1</Link>
        <Link to="#">Link2</Link>
        <Link to="#">Link3</Link>
        </MainMenuElement>
)

export const Default = () => (
    <MainMenuElement title="Menu Element Title">
        <Link to="#">Link1</Link>
        <Link to="#">Link2</Link>
        <Link to="#">Link3</Link>
        </MainMenuElement>
)
