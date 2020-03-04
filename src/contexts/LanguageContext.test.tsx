import * as LanguageContext from "./LanguageContext";

describe("LanguageContext", () => {
    it("should call useContext", () => {
        const contextValues = { language: "en", setLanguage: jest.fn() };
        const useLanguageContext = jest
            .spyOn(LanguageContext, "useLanguageContext")
            .mockImplementation(() => contextValues);
    });
});
