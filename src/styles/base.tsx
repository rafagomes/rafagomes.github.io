import React from "react"
import { Global, css } from "@emotion/core"
import animations from "./animations"

export default ({ children }: any) => (
    <>
        <Global
            styles={css`
                ${animations}

                body,
                html {
                    height: 100%;
                }

                #___gatsby {
                    height: 100%;
                }

                #gatsby-focus-wrapper {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p,
                a,
                span,
                strong {
                    font-family: "Roboto";
                    font-weight: 400;
                }
            `}
        />
        {children}
    </>
)
