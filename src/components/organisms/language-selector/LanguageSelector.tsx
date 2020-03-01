import React, { ReactElement, useContext } from "react";
import { css } from "@emotion/core";
import { LanguageContext } from "../../../contexts/LanguageContext";

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
    const { language, setLanguage } = useContext(LanguageContext);

    const updateLanguage = (event: React.MouseEvent, _language: string) => {
        event.preventDefault();
        setLanguage(_language);
    };

    return (
        <nav>
            <ul css={listContainer}>
                <li css={listStyle}>
                    <a
                        href="#"
                        onClick={(event: React.MouseEvent) => updateLanguage(event, "en")}
                        css={language === "en" ? activeLanguage : linkStyle}
                    >
                        EN
                    </a>
                </li>
                <li css={listStyle}>
                    <a
                        href="#"
                        onClick={(event: React.MouseEvent) => updateLanguage(event, "pt")}
                        css={language === "pt" ? activeLanguage : linkStyle}
                    >
                        PT
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default LanguageSelector;