import React from "react"
import { Route, RouteProps } from "react-router-dom"

function MainTemplate(props: RouteProps) {
    return (
        <>
            <h1>Main Template</h1>
            <Route {...props} />
        </>
    )
}

export default MainTemplate
