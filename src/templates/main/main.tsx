import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import "normalize.css"

import Header from "../../components/header"
import Global from "../../styles/base"
import LanguageSelector from "../../components/language-selector"

interface Props {
    children: any
    data: any
}

const Footer = styled.footer`
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 90px;
`

const Main = styled.main`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    overflow: hidden;
    margin-top: 120px;
    height: calc(100vh - 120px);
`

export default function MainTemplate({ children, data }: any) {
    console.log(data)
    const { markdownRemark } = data
    const { html } = markdownRemark
    const { menuLinks } = data.site.siteMetadata

    return (
        <Global>
            <Header menuLinks={menuLinks} />
            <Main dangerouslySetInnerHTML={{ __html: html }}>{children}</Main>
            <Footer>
                <LanguageSelector />
            </Footer>
        </Global>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
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
`
