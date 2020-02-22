import React from "react"
import Link from "gatsby-plugin-transition-link"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import anime from "animejs"

import MainTemplate from "../templates/main"
import SEO from "../components/seo"
import Greeting from "../components/greeting"
import ArrowLink from "../components/arrowLink"

const LinkStyle = css`
    display: flex;
    position: fixed;
    bottom: 10px;
    left: 50%;
    margin-left: -130px;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-decoration: none;
    font-weight: 300;
    font-size: 24px;
`

const BlackSquare = styled.div`
    display: flex;
    right: 150px;
    background-color: black;
    height: 100vh;
    top: 35vh;
    width: 100%;
    position: absolute;
    z-index: 0;
`

const GreetingAnim = styled.div`
    opacity: 1;
    margin-top: 2%;
`

function Home() {
    const blackSquareRef = React.useRef()
    const greetingRef = React.useRef()

    const transition = () => {
        anime({
            targets: blackSquareRef.current,
            top: "0vh",
            duration: 2500,
        })
        anime({
            targets: greetingRef.current,
            opacity: 0,
            marginTop: "0%",
            duration: 500,
        })
    }
    return (
        <MainTemplate>
            <SEO title="Home" />
            <GreetingAnim ref={greetingRef}>
                <Greeting
                    key="Greeting"
                    greeting="Nice to meet you!"
                    presentation="I'm Rafa Gomes, a developer."
                />
            </GreetingAnim>
            <BlackSquare ref={blackSquareRef}>
                <Link
                    css={LinkStyle}
                    to="/resume"
                    exit={{
                        length: 2.5,
                        trigger: transition,
                    }}
                    entry={{
                        delay: 2,
                    }}
                >
                    Resume
                    <ArrowLink />
                </Link>
            </BlackSquare>
        </MainTemplate>
    )
}

export default Home
