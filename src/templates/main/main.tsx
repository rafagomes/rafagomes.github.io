import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled";

import Header from "../../components/header"

interface Props {
  children: any
}

const Site = styled.div({
  fontFamily: 'Roboto',
  fontWeight: 400
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
      <main>{children}</main>
      <footer>
        <nav>
          <ul>    
            <li><a href="https://www.gatsbyjs.org">EN</a></li>
            <li><a href="https://www.gatsbyjs.org">PT</a></li>
          </ul>
        </nav>
      </footer>
    </Site>
  )
}

export default MainTemplate
