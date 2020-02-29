import React, { Fragment } from "react";
import { Route, RouteProps } from "react-router-dom";
import Header from "../../organisms/header";

function MainTemplate(props: RouteProps) {
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
        </Fragment>
    );
}

export default MainTemplate;
