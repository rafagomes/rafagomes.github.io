import React from "react";
import { mount } from "enzyme";
import Resume from "./Resume";

describe("Resume", () => {
    it("should mount without crash", () => {
        const wrapper = mount(<Resume />);
        expect(wrapper.children().length).toBeGreaterThan(0);
    });
});
