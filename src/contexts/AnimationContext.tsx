import React from "react";

const value: { animation: string; setAnimation: React.Dispatch<React.SetStateAction<string>> } = {
    animation: "",
    setAnimation: () => {},
};

export const AnimationContext = React.createContext(value);
