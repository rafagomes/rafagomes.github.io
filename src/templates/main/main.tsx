import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../../components/header"
import NavLink from "../../components/nav-link";

interface Props {
  children: any
}

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
    <>
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
    </>
  )
}

export default MainTemplate
