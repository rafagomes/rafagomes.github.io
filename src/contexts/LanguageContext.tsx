import React, { useContext } from "react";

export const LanguageContext = React.createContext({ language: "en", setLanguage: () => {} });
export const useLanguageContext = () => useContext(LanguageContext);
