import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Greeting from "../../molecules/greetings";
import ArrowLink from "../../atoms/arrow";
import resumeContent from "../../../resume-content/resume.json";
import { LanguageContext } from "../../../contexts/LanguageContext";

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
    const { language } = useContext(LanguageContext);
    const { title, subtitle, linkToResume } = resumeContent[language].greetings;

    return (
        <Fragment>
            <Greeting key="Greeting" presentation={title} greeting={subtitle} />
            <BlackSquare>
                <Link css={LinkStyle} to="/resume">
                    {linkToResume}
                    <ArrowLink />
                </Link>
            </BlackSquare>
        </Fragment>
    );
}

export default Home;
