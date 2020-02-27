import React from "react"
import { graphql } from "gatsby"

import MainTemplate from "../main"
import styled from "@emotion/styled"

const BlackSquare = styled.div`
    margin-right: 150px;
    background: black;
    color: white;
    padding: 50px;
    font-size: 24px;
`

export default function MarkdownTemplate({ data }: any) {
    const { markdownRemark } = data
    const { html } = markdownRemark

    return (
        <MainTemplate isMarkDown={true}>
            <BlackSquare
                dangerouslySetInnerHTML={{ __html: html }}
            ></BlackSquare>
        </MainTemplate>
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
