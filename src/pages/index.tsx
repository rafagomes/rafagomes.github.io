import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import MainTemplate from "../templates/main"
import SEO from "../components/seo"
import Greeting from "../components/greeting"

const BlackSquare = styled.div`
    margin-right: 150px;
    background-color: black;
    height: 45vh;
    align-self: 100%;
`

const LinkStyle = css`
    color: white;
    textdecoration: none;
`

const Resume = () => (
    <MainTemplate>
        <SEO title="Home" />
        <Greeting
            greeting="Nice to meet you!"
            presentation="I'm Rafa Gomes, a developer"
        />
        <BlackSquare>
            <Link css={LinkStyle} to="/resume">
                Resume
            </Link>
        </BlackSquare>
    </MainTemplate>
)

export default Resume
