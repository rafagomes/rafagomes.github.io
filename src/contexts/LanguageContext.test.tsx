import { LanguageContext } from "./LanguageContext";
import { mount } from "enzyme";

describe("LanguageContext", () => {
    it("setLanguage has to be called", () => {
        const wrapper = mount(
            <LanguageContext.Consumer>
                {context => {
                    context.setLanguage("pt");
                    // TODO test
                }}
            </LanguageContext.Consumer>,
        );
    });
});
