import { LanguageContext } from "./LanguageContext";
import { shallow } from "enzyme";

describe("LanguageContext", () => {
    it("setLanguage has to be called", () => {
        const wrapper = shallow(
            <LanguageContext.Consumer>
                {context => {
                    context.setLanguage("pt");
                    // como testo isso?
                }}
            </LanguageContext.Consumer>,
        );
    });
});
