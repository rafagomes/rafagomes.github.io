import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import "normalize.css"

import Header from "../../components/header"
import Global from "../../styles/base"
import LanguageSelector from "../../components/language-selector"

interface Props {
    children: any
}

const Footer = styled.footer`
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 90px;
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
                <LanguageSelector />
            </Footer>
        </Global>
    )
}

export default MainTemplate
