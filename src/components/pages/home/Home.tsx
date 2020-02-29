import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Greeting from "../../molecules/greetings";
import ArrowLink from "../../atoms/arrow";

const LinkStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    margin-left: 100px;
    text-decoration: none;
    font-weight: 300;
    font-size: 24px;
`;

const BlackSquare = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    justify-content: center;
    align-items: flex-end;
    right: 150px;
    background-color: black;
    height: 50vh;
    width: 100%;
`;

function Home() {
    return (
        <Fragment>
            <Greeting key="Greeting" greeting="Nice to meet you!" presentation="I'm Rafa Gomes, a developer." />
            <BlackSquare>
                <Link css={LinkStyle} to="/resume">
                    Resume
                    <ArrowLink />
                </Link>
            </BlackSquare>
        </Fragment>
    );
}

export default Home;
