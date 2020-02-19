import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import "normalize.css"

import Header from "../../components/header"

interface Props {
  children: any
}

const Site = styled.div({
  fontFamily: 'Roboto',
  fontWeight: 400
});

const Footer = styled.footer({
  position: 'fixed',
  right: '10px',
  bottom: '10px'
});

const Main = styled.main({
  display: 'flex',
  flexDirection: 'column'
});

const MainTemplate = ({ children }:Props) => {
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
  `);

  const {menuLinks} = data.site.siteMetadata;

  return (
    <Site>
      <Header menuLinks={menuLinks} />
      <Main>{children}</Main>
      <Footer>
        <nav>
          <ul>
            <li><a href="https://www.gatsbyjs.org">EN</a></li>
            <li><a href="https://www.gatsbyjs.org">PT</a></li>
          </ul>
        </nav>
      </Footer>
    </Site>
  )
}

export default MainTemplate
