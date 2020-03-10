import React from "react";
import { render, mount } from "enzyme";
import Heading from "./Heading";

describe("Heading", () => {
    it("renders text inside it", () => {
        const wrapper = render(<Heading rank="1">title</Heading>);
        expect(wrapper.text()).toContain("title");
    });

    it("renders rank prop", () => {
        const wrapper = mount(<Heading rank="1">title</Heading>);
        expect(wrapper.props().rank).toBe("1");
    });

    it("renders h1 as expected", () => {
        const wrapper = render(<Heading rank="1">title</Heading>);
        expect(wrapper[0].name).toEqual("h1");
    });
});
