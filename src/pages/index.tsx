import React from "react"
import { Link } from "gatsby"

import MainTemplate from "../templates/main"
import SEO from "../components/seo"

const Resume = () => (
  <MainTemplate>
    <SEO title="Page two" />
    <Link to="/">Go back to the homepage</Link>
  </MainTemplate>
)

export default Resume
