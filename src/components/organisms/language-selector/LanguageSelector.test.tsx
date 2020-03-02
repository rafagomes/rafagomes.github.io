import React from "react";
import LanguageSelector from "./LanguageSelector";
import { render } from "@testing-library/react";
import { LanguageContext } from "../../../contexts/LanguageContext";

describe("LanguageSelector", () => {
    it("changes language on click", () => {
        const context = (
            <LanguageContext.Provider value={{ language: "en", setLanguage: jest.fn() }}>
                <LanguageSelector />
            </LanguageContext.Provider>
        );

        const teste = render(context);
        console.log(teste.queryAllByText("en"));
    });
});
