import React, { ReactElement, useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { linkStyle, listContainer, listStyle, activeLanguage } from "./LanguageSelector.style";

function LanguageSelector(): ReactElement {
    const { language, setLanguage } = useContext(LanguageContext);

    const updateLanguage = (event: React.MouseEvent, _language: string): void => {
        event.preventDefault();
        setLanguage(_language);
    };

    return (
        <nav>
            <ul css={listContainer}>
                <li css={listStyle}>
                    <a
                        href="#"
                        onClick={(event: React.MouseEvent): void => updateLanguage(event, "en")}
                        css={language === "en" ? activeLanguage : linkStyle}
                    >
                        EN
                    </a>
                </li>
                <li css={listStyle}>
                    <a
                        href="#"
                        onClick={(event: React.MouseEvent): void => updateLanguage(event, "pt")}
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
