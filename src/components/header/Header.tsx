import React from "react"
import NavLink from "../nav-link"
import styled from "@emotion/styled"

const Li = styled.li({
    listStyle: "none",
})

const Ul = styled.ul({
    maxWidth: "800px",
    paddingLeft: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
})

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
