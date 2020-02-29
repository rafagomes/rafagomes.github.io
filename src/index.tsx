import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BaseStyle from "./styles/Base";
import Home from "./components/pages/home";
import MainTemplate from "./components/templates/main";

function App() {
    return (
        <>
            <Global styles={BaseStyle} />
            <BrowserRouter>
                <Switch>
                    <MainTemplate path="/" exact={true} component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
