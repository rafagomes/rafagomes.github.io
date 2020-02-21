import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import "normalize.css"

import Header from "../../components/header"
import Global from "../../styles/base"

interface Props {
    children: any
}

const Footer = styled.footer`
    position: fixed;
    right: 10px;
    bottom: 10px;
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
`

const MainTemplate = ({ children }: Props) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    menuLinks {
                        name
                        link
                        external
                    }
                }
            }
        }
    `)

    const { menuLinks } = data.site.siteMetadata

    return (
        <Global>
            <Header menuLinks={menuLinks} />
            <Main>{children}</Main>
            <Footer>
                <nav>
                    <ul>
                        <li>
                            <a href="https://www.gatsbyjs.org">EN</a>
                        </li>
                        <li>
                            <a href="https://www.gatsbyjs.org">PT</a>
                        </li>
                    </ul>
                </nav>
            </Footer>
        </Global>
    )
}

export default MainTemplate
