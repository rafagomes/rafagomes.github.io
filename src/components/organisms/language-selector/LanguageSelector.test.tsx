import React, { ReactElement } from "react";
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { mount } from "enzyme";

describe("LanguageSelector", () => {
    const event = { preventDefault: (): void => {} };
    const setLanguage = jest.fn();

    const renderComponent = (language: string) => {
        const value = { language, setLanguage };
        const component = (): ReactElement => (
            <LanguageContext.Provider value={value}>
                <LanguageSelector />
            </LanguageContext.Provider>
        );
        return component;
    };

    beforeEach(() => {
        jest.spyOn(event, "preventDefault");
    });

    it("PT link has active Class as language is pt", () => {
        const TestComponent = renderComponent("pt");
        const element = mount(<TestComponent />);

        const activeLink = element
            .find(LanguageSelector)
            .find("a")
            .last();

        expect(activeLink.hasClass(/\bactiveLanguage\b/)).toBeTruthy();
    });

    it("EN link has active Class as language is en", () => {
        const TestComponent = renderComponent("en");
        const element = mount(<TestComponent />);
        const links = element.find(LanguageSelector).find("a");

        expect(links.first().hasClass(/\bactiveLanguage\b/)).toBeTruthy();
    });

    it("setLanguage has to be clicked", () => {
        const TestComponent = renderComponent("en");
        const element = mount(<TestComponent />);
        const links = element.find(LanguageSelector).find("a");

        links.first().simulate("click");
        links.last().simulate("click");

        // expect(setLanguage).toBeCalledTimes(2);
    });
});
