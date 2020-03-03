import React from "react";
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { mount, shallow } from "enzyme";

describe("LanguageSelector", () => {
    const event = { preventDefault: () => {} };
    const setLanguage = jest.fn();

    let language = "en";

    beforeEach(() => {
        jest.spyOn(event, "preventDefault");
    });

    it("PT link has active Class as language is pt", () => {
        language = "pt";
        const value = { language, setLanguage };
        const TestComponent = () => (
            <LanguageContext.Provider value={value}>
                <LanguageSelector />
            </LanguageContext.Provider>
        );
        const element = mount(<TestComponent />);
        const activeLink = element
            .find(LanguageSelector)
            .find("a")
            .last();

        expect(activeLink.hasClass(/\bactiveLanguage\b/)).toBeTruthy();
    });

    it("EN link has active Class as language is en", () => {
        language = "en";
        const value = { language, setLanguage };
        const TestComponent = () => (
            <LanguageContext.Provider value={value}>
                <LanguageSelector />
            </LanguageContext.Provider>
        );
        const element = mount(<TestComponent />);
        const links = element.find(LanguageSelector).find("a");

        expect(links.first().hasClass(/\bactiveLanguage\b/)).toBeTruthy();
    });

    it("setLanguage has to be clicked", () => {
        language = "pt";
        const value = { language, setLanguage };

        const TestComponent = () => (
            <LanguageContext.Provider value={value}>
                <LanguageSelector />
            </LanguageContext.Provider>
        );

        const element = mount(<TestComponent />);
        element
            .find(LanguageSelector)
            .find("a")
            .first()
            .simulate("click");

        console.log(expect(setLanguage).toBeCalled());
    });

    // it("PT link needs to be clicked", () => {
    //     language = "pt";
    //     const value = { language, setLanguage };
    //     const TestComponent = () => (
    //         <LanguageContext.Provider value={value}>
    //             <LanguageSelector />
    //         </LanguageContext.Provider>
    //     );
    //     const element = mount(<TestComponent />);
    //     element
    //         .find(LanguageSelector)
    //         .find("a")
    //         .last()
    //         .simulate("click");
    // });
});
