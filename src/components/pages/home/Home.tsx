import React, { Fragment, useContext, ReactElement } from "react";
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

    @media (max-width: 420px) {
        display: none;
    }
`;

const BlackSquare = styled.div`
    display: flex;
    position: absolute;
    height: 50vh;
    width: 100%;
    bottom: 0;
    justify-content: center;
    right: 150px;
    background-color: black;
    align-items: flex-end;

    @media (max-width: 420px) {
        right: 0;
        height: 70vh;
        flex-direction: column;
        justify-content: flex-start;
    }
`;

const ContactMobile = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: white;
    margin-left: 20px;
    align-self: flex-start;
    justify-self: flex-start;

    @media (min-width: 421px) {
        display: none;
    }
`;

function Home(): ReactElement {
    const { language } = useContext(LanguageContext);
    const { title, subtitle, linkToResume } = resumeContent[language].greetings;

    return (
        <Fragment>
            <Greeting key="Greeting" presentation={title} greeting={subtitle} />
            <BlackSquare>
                <ContactMobile>
                    <h4>Email: hello@rafagomes.dev</h4>
                    <h4>Location: Rio de Janeiro</h4>
                    <h4>Age: 36</h4>
                </ContactMobile>
                <Link css={LinkStyle} to="/resume">
                    {linkToResume}
                    <ArrowLink />
                </Link>
            </BlackSquare>
        </Fragment>
    );
}

export default Home;
