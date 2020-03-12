import React, { Fragment, useContext, ReactElement } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import Greeting from "../../molecules/greetings";
import ArrowLink from "../../atoms/arrow";
import resumeContent from "../../../resume-content/resume.json";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { BlackSquare, ContactMobile, LinkStyle } from "./Home.style";
import { AnimationContext } from "../../../contexts/AnimationContext";

function Home(): ReactElement {
    const { language } = useContext(LanguageContext);
    const { animation } = useContext(AnimationContext);

    const { title, subtitle, linkToResume } = resumeContent[language].greetings;

    const getMyAge = (): string => {
        const birthday = moment("19830603");
        return Math.abs(birthday.diff(moment(), "years")).toString();
    };

    return (
        <Fragment>
            <Greeting key="Greeting" presentation={title} greeting={subtitle} />
            <BlackSquare className={animation}>
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
