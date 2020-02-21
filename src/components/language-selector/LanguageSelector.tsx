import React from "react"
import { css } from "@emotion/core"
import { Color } from "../../styles/color"

const listContainer = css`
    display: flex;
    padding-left: 0;
    justify-content: space-between;
`

const listStyle = css`
    list-style: none;
`

const linkStyle = css`
    font-size: 24px;
    text-decoration: none;
    color: ${Color.grey};
`

const activeLanguage = css`
    ${linkStyle};
    color: ${Color.black};
`

function LanguageSelector() {
    return (
        <nav>
            <ul css={listContainer}>
                <li css={listStyle}>
                    <a href="https://www.gatsbyjs.org" css={activeLanguage}>
                        EN
                    </a>
                </li>
                <li css={listStyle}>
                    <a href="https://www.gatsbyjs.org" css={linkStyle}>
                        PT
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default LanguageSelector
