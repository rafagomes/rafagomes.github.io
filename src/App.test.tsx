import React from "react";

import App from "./App";
import { render } from "enzyme";

describe("App", () => {
    it("should renders without crash", () => {
        const wrapper = render(<App />);
        expect(wrapper.length).toBeGreaterThan(0);
    });
});
