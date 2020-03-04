import * as LanguageContext from "./LanguageContext";

import LanguageSelector from "../components/organisms/language-selector/LanguageSelector";
import { shallow, mount } from "enzyme";
import { useContext } from "react";

describe("LanguageContext", () => {
    it("should call useContext", () => {
        // const contextValues = { language: "en", setLanguage: () => jest.fn() };
        // jest.spyOn(LanguageContext, "useLanguageContext").mockImplementation(() => contextValues);
        // const wrapper = mount(<LanguageSelector />);
        // wrapper
        //     .find("a")
        //     .last()
        //     .simulate("click");
        // expect(contextValues.setLanguage).toBeCalled();
    });

    it("should call useContext 2", () => {
        const contextValues = { language: "en", setLanguage: () => jest.fn() };
        jest.spyOn(LanguageContext, "useLanguageContext").mockImplementation(() => contextValues);

        const { language } = useContext(LanguageContext);
        console.log(language);
        const wrapper = mount(<LanguageSelector />);
        wrapper
            .find("a")
            .last()
            .simulate("click");
        expect(contextValues.setLanguage).toBeCalled();
    });
});
