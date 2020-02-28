import React from "react"
import List from "../../molecules/list"
import NavLink from "../../atoms/navlink"
import { css } from "@emotion/core"

const headerStyle = css`
    background: white;
    position: absolute;
    width: 100%;
    height: 120px;
    z-index: 10;
`

function Header() {
    const renderMenu = () => {
        return (
            <List>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/resume">Resume</NavLink>
                </li>
            </List>
        )
    }

    return (
        <header css={headerStyle}>
            <nav>{renderMenu()}</nav>
        </header>
    )
}

export default Header
