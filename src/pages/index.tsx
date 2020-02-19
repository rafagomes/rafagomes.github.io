import React from "react"
import { Link } from "gatsby"

import MainTemplate from "../templates/main"
import SEO from "../components/seo"
import Greeting from "../components/greeting"

const IndexPage = () => (
  <MainTemplate>
    <SEO title="Home" />
    <Greeting greeting="Nice to meet you!" presentation="I'm Rafa Gomes, a web developer"/>
    <Link to="/page-2/">Resume</Link>
  </MainTemplate>
)

export default IndexPage
