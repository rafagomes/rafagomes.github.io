import React, { Fragment, ReactElement, useState } from "react";
import { Route, RouteProps } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../../organisms/header";
import { LanguageContext } from "../../../contexts/LanguageContext";
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
`;

function MainTemplate(props: RouteProps): ReactElement {
    const [language, setLanguage] = useState("en");
    const value = { language, setLanguage };
    const { menuLinks } = resumeContent[language];

    return (
        <Fragment>
            <LanguageContext.Provider value={value}>
                <Header menuLinks={menuLinks} />
                <Route {...props} />
                <Footer>
                    <LanguageSelector />
                </Footer>
            </LanguageContext.Provider>
        </Fragment>
    );
}

export default MainTemplate;
