import React from "react"
import Heading from "../heading"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

interface Props {
    greeting: string
    presentation: string
}

const Wrapper = styled.div`
    margin: 3% 0 3% 50px;
`

const h2Style = css`
    font-weight: 100;
    font-size: 42px;
`

const h1Style = css`
    font-weight: 300;
    font-size: 64px;
`

function Greeting({ greeting, presentation }: Props) {
    return (
        <Wrapper>
            <Heading css={h2Style} rank="2">
                {greeting}
            </Heading>
            <Heading css={h1Style} rank="1">
                {presentation}
            </Heading>
        </Wrapper>
    )
}

export default Greeting
