import React, { ReactElement } from "react";
import { css } from "@emotion/core";

const listContainer = css`
    display: flex;
    padding-left: 0;
    justify-content: space-between;
`;

const listStyle = css`
    list-style: none;
`;

const linkStyle = css`
    font-size: 24px;
    text-decoration: none;
    color: grey;
`;

const activeLanguage = css`
    ${linkStyle};
    color: black;
`;

function LanguageSelector(): ReactElement {
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
    );
}

export default LanguageSelector;
