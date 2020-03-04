import React from "react";
import { mount } from "enzyme";
import Resume from "./Resume";

describe("Resume", () => {
    it("should mount without crash", () => {
        const wrapper = mount(<Resume />);
        expect(wrapper.find("h1").text()).toBe("Rafa Gomes");
    });
});
