import React from "react"
import { Link } from "gatsby"

import MainTemplate from "../templates/main"
import SEO from "../components/seo"
import Greeting from "../components/greeting"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const BlackSquare = styled.div({
  width: '100vh',
  marginRight: '150px',
  backgroundColor: 'black',
  height: '45vh',
  justifySelf: 'flex-end',
  alignSelf: 'left'
});

const LinkStyle = css({
  color: 'white',
  textDecoration: 'none'
});

const IndexPage = () => (
  <MainTemplate>
    <SEO title="Home" />
    <Greeting greeting="Nice to meet you!" presentation="I'm Rafa Gomes, a developer"/>
    <BlackSquare>
      <Link css={LinkStyle} to="/page-2/">Resume</Link>
    </BlackSquare>
  </MainTemplate>
)

export default IndexPage;
