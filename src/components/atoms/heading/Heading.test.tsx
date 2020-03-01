import React from "react";
import "../../../setupTests";
import { mount } from "enzyme";
import Heading from "./Heading";

describe("Heading", () => {
    const headingProps = { rank: "1", title: "Title" };

    it("Heading component renders text inside it", () => {
        const heading = mount(<Heading rank={headingProps.rank}>{headingProps.title}</Heading>);
        expect(heading.text()).toBe("Title");
    });

    it("Heading component render with rank correctly", () => {
        const heading = mount(<Heading rank={headingProps.rank}>{headingProps.title}</Heading>);
        expect(heading).toBe(<h1>Title</h1>);
    });
});
