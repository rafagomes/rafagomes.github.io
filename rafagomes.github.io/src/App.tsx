import React from "react";
import { Global } from "@emotion/core";
import { BrowserRouter, Switch } from "react-router-dom";

import BaseStyle from "./styles/Base";

import MainTemplate from "./components/templates/main";
import Home from "./components/pages/home";
import Resume from "./components/pages/resume";

function App() {
    return (
        <>
            <Global styles={BaseStyle} />
            <BrowserRouter>
                <Switch>
                    <MainTemplate path="/" exact component={Home} />
                    <MainTemplate path="/resume" exact component={Resume} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
