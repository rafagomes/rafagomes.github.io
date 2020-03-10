import React from "react";
import { render } from "enzyme";
import Arrow from "./Arrow";

describe("Arrow component", () => {
    it("Arrow component renders as expected", () => {
        const arrow = render(<Arrow />);
        expect(arrow[0].name).toEqual("span");
    });
});
