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
                li,
                strong {
                    font-family: "Roboto";
                    font-weight: 400;
                }

                .resume {
                    display: flex;
                }

                .resume .name-block {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    color: black;
                    background: white;
                    margin-left: -50px;
                    padding: 40px 0 40px 50px;
                    margin-bottom: 55px;
                }

                .resume h1,
                .resume h2 {
                    font-size: 48px;
                    font-weight: 300;
                    margin: 0;
                }

                .resume h2 {
                    font-size: 36px;
                }

                .resume p,
                .resume h3,
                .resume h4,
                .resume li {
                    font-weight: 300;
                    line-height: 1.4;
                }

                .resume h3 {
                    font-size: 36px;
                    margin: 0 0 20px 0;
                }

                .resume h4 {
                    font-size: 26px;
                    margin: 0 0 15px 0;
                }

                .resume-sidebar {
                    width: 350px;
                    margin-right: 10%;
                }

                .resume-main {
                    width: 50%;
                }

                .resume .custom-block {
                    margin-bottom: 55px;
                }
            `}
        />
        {children}
    </>
)
