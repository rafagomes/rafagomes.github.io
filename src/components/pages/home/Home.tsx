import React, { Fragment, useContext, ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import moment from "moment";

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

    @media (min-width: 2000px) {
        font-size: 3.5rem;
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
        height: 65vh;
        flex-direction: column;
        justify-content: flex-start;
    }

    @media (min-width: 2000px) {
        right: 10%;
        font-size: 2.3rem;
    }
`;

const ContactMobile = styled.div`
    font-size: 18px;
    color: white;
    margin-left: 20px;
    align-self: flex-start;
    justify-self: flex-start;

    & h4 {
        font-weight: 300;
    }

    @media (min-width: 421px) {
        display: none;
    }
`;

function Home(): ReactElement {
    const { language } = useContext(LanguageContext);
    const { title, subtitle, linkToResume } = resumeContent[language].greetings;

    const getMyAge = (): string => {
        const birthday = moment("19830603");
        return Math.abs(birthday.diff(moment(), "years")).toString();
    };

    return (
        <Fragment>
            <Greeting key="Greeting" presentation={title} greeting={subtitle} />
            <BlackSquare>
                <ContactMobile>
                    <h4>Location: Rio de Janeiro/Brazil</h4>
                    <h4>Timezone: UTC-3</h4>
                    <h4>Age: {getMyAge()}</h4>
                    <h4>Email: hello@rafagomes.dev</h4>
                    <h4>Linkedin: in/rafagomesdev/</h4>
                    <h4>Github: rafagomes</h4>
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
