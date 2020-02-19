import React from "react"
import { Link } from "gatsby"

import MainTemplate from "../templates/main"
import SEO from "../components/seo"

const IndexPage = () => (
  <MainTemplate>
    <SEO title="Home" />
    <h2>Nice to meet you!</h2>
    <h1>I'm Rafa Gomes, a web developer</h1>
    <Link to="/page-2/">Resume</Link>
  </MainTemplate>
)

export default IndexPage
