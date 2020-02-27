import React from "react"
import ReactDOM from "react-dom"
import { Global } from "@emotion/core"
import { BrowserRouter as Router, Switch } from "react-router-dom"

import BaseStyle from "./styles/base"
import MainTemplate from "./components/templates/main"
import Home from "./components/pages/home"

function App() {
    return (
        <>
            <Global styles={BaseStyle} />
            <Router>
                <Switch>
                    <MainTemplate path="/" exact component={Home} />
                </Switch>
            </Router>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))
