import React from "react"
import { storiesOf } from "@storybook/react"
import FullScreenImage from "./fullscreenimage"

export default { title: 'FullScreenImage' };

// alice-muon-slat-wires-closeup.jpg
// double-chooz-topview.jpg

export const darkImage = () => (
    <FullScreenImage img="./src/images/double-chooz-topview.jpg">
        <h1>Dark Image</h1>
    </FullScreenImage>
)

export const lightImage = () => ( <FullScreenImage>
    <h1>Light Image</h1>
</FullScreenImage>
)
