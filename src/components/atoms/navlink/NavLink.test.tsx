import React from "react";
import { render, shallow } from "enzyme";
import NavLink from "./NavLink";
import { MemoryRouter } from "react-router-dom";

describe("Navlink", () => {
    it("renders external link", () => {
        const navLink = render(
            <NavLink to="/" external>
                link
            </NavLink>,
        );
        expect(navLink[0].attribs.target).toEqual("_blank");
    });

    it("renders RouterLink if external not defined", () => {
        const expected = `<a class=\"css-1q37gpx-linkStyle\" href="/">link</a>`;

        const wrapper = shallow(
            <MemoryRouter>
                <NavLink to="/">link</NavLink>
            </MemoryRouter>,
        );

        const result = wrapper.html();

        expect(result).toEqual(expected);
        expect(wrapper.find(NavLink)).toHaveLength(1);
    });
});
