import React from "react";
import List from "./List";
import { render } from "enzyme";

describe("List", () => {
    const items = ["item one", "item two"];

    it("renders the correct number of items", () => {
        const wrapper = render(<List items={items} />);
        expect(wrapper.find("li").length).toEqual(2);
    });

    it("render ol if passed props", () => {
        const list = render(<List items={items} ListType="ol" />);
        expect(list[0].name).toBe("ol");
    });
});
