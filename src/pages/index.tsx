import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import MainTemplate from "../templates/main"
import SEO from "../components/seo"
import Greeting from "../components/greeting"
import ArrowLink from "../components/arrowLink"

const BlackSquare = styled.div`
    display: flex;
    margin-right: 150px;
    background-color: black;
    height: 55%;
    align-items: flex-end;
    justify-content: center;
`

const LinkStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-decoration: none;
    font-weight: 300;
    font-size: 24px;
`

const Home = () => (
    <MainTemplate>
        <SEO title="Home" />
        <Greeting
            greeting="Nice to meet you!"
            presentation="I'm Rafa Gomes, a developer"
        />
        <BlackSquare>
            <Link css={LinkStyle} to="/resume">
                Resume
                <ArrowLink />
            </Link>
        </BlackSquare>
    </MainTemplate>
)

export default Home
