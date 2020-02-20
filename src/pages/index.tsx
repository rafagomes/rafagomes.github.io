import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import MainTemplate from "../templates/main"
import SEO from "../components/seo"
import Greeting from "../components/greeting"

const BlackSquare = styled.div({
    marginRight: "150px",
    backgroundColor: "black",
    height: "45vh",
    justifySelf: "flex-end",
    alignSelf: "left",
})

const LinkStyle = css({
    color: "white",
    textDecoration: "none",
})

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
