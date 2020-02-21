import React from "react"
import NavLink from "../nav-link"
import styled from "@emotion/styled"

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
        <header>
            <nav>
                <Ul>{renderMenu()}</Ul>
            </nav>
        </header>
    )
}

export default Header
