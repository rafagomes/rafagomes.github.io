import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../../components/header"

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
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default MainTemplate
