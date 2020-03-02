import React from "react";
import Greetings from "./Greetings";
import { render } from "enzyme";

describe("Greetings", () => {
    it("renders texts as expected", () => {
        const texts = { greeting: "Greeting text", presentation: "Presentation text" };
        const greetings = render(<Greetings greeting={texts.greeting} presentation={texts.presentation} />);
        expect(greetings.find("h1").text()).toBe("Presentation text");
        expect(greetings.find("h2").text()).toBe("Greeting text");
    });
});
