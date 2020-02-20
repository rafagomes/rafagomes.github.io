import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import "normalize.css"

import Header from "../../components/header"

interface Props {
    children: any
}

const Site = styled.div({
    fontFamily: "Roboto",
    fontWeight: 400,
})

const Footer = styled.footer({
    position: "fixed",
    right: "10px",
    bottom: "10px",
})

const Main = styled.main({
    display: "flex",
    flexDirection: "column",
})

export default function Template({ data }: any) {
    const { markdownRemark } = data
    const { html } = markdownRemark

    const { menuLinks } = data.site.siteMetadata

    return (
        <Site>
            <Header menuLinks={menuLinks} />
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
        </Site>
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
