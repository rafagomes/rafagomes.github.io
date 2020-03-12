import React, { Fragment, ReactElement, useState } from "react";
import { Route, RouteProps } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../../organisms/header";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { AnimationContext } from "../../../contexts/AnimationContext";
import LanguageSelector from "../../organisms/language-selector";
import resumeContent from "../../../resume-content/resume.json";

const Footer = styled.footer`
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 90px;

    @media (max-width: 420px) {
        right: 0;
        bottom: 10px;
        width: 70px;
        background: white;
    }

    @media (min-width: 2000px) {
        width: 7%;
    }
`;

function MainTemplate(props: RouteProps): ReactElement {
    const [language, setLanguage] = useState("en");
    const [animation, setAnimation] = useState("");

    const languageValue = { language, setLanguage };
    const animationValue = { animation, setAnimation };

    const { menuLinks } = resumeContent[language];

    const menuLinkswithonClick = menuLinks.map(item => {
        if (item.text === "Resume") {
            item.onClick = () => setAnimation("active");
        }
        return item;
    });

    return (
        <Fragment>
            <AnimationContext.Provider value={animationValue}>
                <LanguageContext.Provider value={languageValue}>
                    <Header menuLinks={menuLinkswithonClick} />
                    <Route {...props} />
                    <Footer>
                        <LanguageSelector />
                    </Footer>
                </LanguageContext.Provider>
            </AnimationContext.Provider>
        </Fragment>
    );
}

export default MainTemplate;
