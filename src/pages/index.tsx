import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import MainTemplate from "../templates/main"
import SEO from "../components/seo"
import Greeting from "../components/greeting"
import ArrowLink from "../components/arrowLink"

let resumeActive = false

const BlackSquare = styled.div`
    display: flex;
    margin-right: 150px;
    background-color: black;
    height: ${resumeActive ? "100%" : "55%"};
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

function Home() {
    const goToResume = (event: React.MouseEvent) => {
        event.preventDefault()
        resumeActive = true
    }

    return (
        <MainTemplate>
            <SEO title="Home" />
            <Greeting
                greeting="Nice to meet you!"
                presentation="I'm Rafa Gomes, a developer."
            />
            <BlackSquare>
                <Link
                    onClick={event => goToResume(event)}
                    css={LinkStyle}
                    to="/resume"
                >
                    Resume
                    <ArrowLink />
                </Link>
            </BlackSquare>
        </MainTemplate>
    )
}

export default Home
