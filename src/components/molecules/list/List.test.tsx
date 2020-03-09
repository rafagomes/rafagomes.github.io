import React from "react";
import List from "./List";
import { shallow } from "enzyme";

describe("List", () => {
    const items = [{ text: "item one" }, { text: "item two" }];

    it("renders the correct number of items", () => {
        const wrapper = shallow(<List items={items} />);
        expect(wrapper.find("li").length).toEqual(2);
    });

    it("render ol if passed props", () => {
        const list = shallow(<List items={items} ListType="ol" />);
        expect(list.get(0).type).toBe("ol");
    });
});
