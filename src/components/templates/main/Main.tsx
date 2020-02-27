import React from "react"
import { Route, RouteProps } from "react-router-dom"

import Header from "../../organisms/header"

function MainTemplate(props: RouteProps) {
    return (
        <>
            <Header />
            <Route {...props} />
        </>
    )
}

export default MainTemplate
