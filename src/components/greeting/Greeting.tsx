import React from "react"
import Heading from "../heading"
import { css } from "@emotion/core"

interface Props {
    greeting: string
    presentation: string
}

const h2Style = css({
    fontWeight: 100,
    fontSize: "42px",
})

const h1Style = css({
    fontWeight: 300,
    fontSize: "64px",
})

function Greeting({ greeting, presentation }: Props) {
    return (
        <>
            <Heading css={h2Style} rank="2">
                {greeting}
            </Heading>
            <Heading css={h1Style} rank="1">
                {presentation}
            </Heading>
        </>
    )
}

export default Greeting
