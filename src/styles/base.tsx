import React from "react"
import { Global, css } from "@emotion/core"

export default ({ children }: any) => (
    <>
        <Global
            styles={css`
                body,
                html {
                    height: 100%;
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
