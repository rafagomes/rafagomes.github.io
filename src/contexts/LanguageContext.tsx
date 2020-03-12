import React from "react";

const value: { language: string; setLanguage: React.Dispatch<React.SetStateAction<string>> } = {
    language: "en",
    setLanguage: () => {},
};

export const LanguageContext = React.createContext(value);
