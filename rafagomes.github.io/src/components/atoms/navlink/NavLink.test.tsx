import React from "react";
import { render, shallow } from "enzyme";
import NavLink from "./NavLink";
import { MemoryRouter } from "react-router-dom";

describe("Navlink", () => {
    const linkProp = { text: "demo", link: { to: "/", external: true } };

    it("renders external link", () => {
        const navLink = render(<NavLink linkProps={linkProp.link}>{linkProp.text}</NavLink>);
        expect(navLink[0].attribs.target).toEqual("_blank");
    });

    it("renders RouterLink if external not defined", () => {
        const expected = `<a href=\"/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"css-1q37gpx-linkStyle\">demo</a>`;

        const wrapper = shallow(
            <MemoryRouter>
                <NavLink linkProps={linkProp.link}>{linkProp.text}</NavLink>
            </MemoryRouter>,
        );

        const result = wrapper.html();

        expect(result).toEqual(expected);
        expect(wrapper.find(NavLink)).toHaveLength(1);
    });
});
