import React, { Fragment, ReactElement } from "react";
import { Route, RouteProps } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../../organisms/header";
import LanguageSelector from "../../organisms/language-selector";

const Footer = styled.footer`
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 90px;
`;

function MainTemplate(props: RouteProps): ReactElement {
    let menuLinks = [
        { name: "Home", link: "/" },
        { name: "Resume", link: "/resume" },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/rafagomesdev/",
            external: true,
        },
        {
            name: "Twitter",
            link: "https://twitter.com/rafagomes_dev",
            external: true,
        },
    ];

    return (
        <Fragment>
            <Header menuLinks={menuLinks} />
            <Route {...props} />
            <Footer>
                <LanguageSelector />
            </Footer>
        </Fragment>
    );
}

export default MainTemplate;
