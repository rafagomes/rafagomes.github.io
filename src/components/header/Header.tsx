import React from "react"
import NavLink from "../nav-link"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Li = styled.li`
    list-style: none;
`

const Ul = styled.ul`
    max-width: 650px;
    margin: 50px 50px 0 50px;
    padding-left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const headerStyle = css`
    background: white;
    position: absolute;
    width: 100%;
    height: 120px;
    z-index: 10;
`

interface Linkprops {
    link: string
    name: string
    external: Boolean
}

interface Props {
    menuLinks: []
}

function Header({ menuLinks }: Props) {
    const renderMenu = () => {
        return menuLinks.map((linkProps: Linkprops) => {
            const { link, name, ...otherProps } = linkProps

            return (
                <Li key={link}>
                    <NavLink to={link} {...otherProps}>
                        {name}
                    </NavLink>
                </Li>
            )
        })
    }

    return (
        <header css={headerStyle}>
            <nav>
                <Ul>{renderMenu()}</Ul>
            </nav>
        </header>
    )
}

export default Header
