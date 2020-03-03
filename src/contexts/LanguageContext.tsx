import React, { useContext } from "react";

export const useLanguageContext = () => useContext(LanguageContext);
export const LanguageContext = React.createContext({ language: "en", setLanguage: () => {} });
