import React from "react";
import { create } from "react-test-renderer";
import Arrow from "./Arrow";

describe("Arrow component", () => {
    it("Arrow component renders as expected", () => {
        const arrow = create(<Arrow />);
        expect(arrow.toJSON()).toMatchSnapshot();
    });
});
