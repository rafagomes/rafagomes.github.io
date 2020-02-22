// import React from "react"
// import { graphql } from "gatsby"
// import styled from "@emotion/styled"
// import "normalize.css"

// import Header from "../../components/header"
// import Global from "../../styles/base"
// import LanguageSelector from "../../components/language-selector"

// interface Props {
//     children: any
// }

// const Site = styled.div({
//     fontFamily: "Roboto",
//     fontWeight: 400,
// })

// const Footer = styled.footer({
//     position: "fixed",
//     right: "10px",
//     bottom: "10px",
// })

// const Main = styled.main({
//     display: "flex",
//     flexDirection: "column",
// })

// export default function Template({ data }: any) {
//     const { markdownRemark } = data
//     const { html } = markdownRemark

//     const { menuLinks } = data.site.siteMetadata

//     return (
//         <Global>
//             <Header menuLinks={menuLinks} />
//             <Main dangerouslySetInnerHTML={{ __html: html }}></Main>
//             <Footer>
//                 <LanguageSelector />
//             </Footer>
//         </Global>
//     )
// }

// export const pageQuery = graphql`
//     query($path: String!) {
//         markdownRemark(frontmatter: { path: { eq: $path } }) {
//             html
//             frontmatter {
//                 path
//                 title
//             }
//         }
//         site {
//             siteMetadata {
//                 title
//                 menuLinks {
//                     name
//                     link
//                     external
//                 }
//             }
//         }
//     }
// `
