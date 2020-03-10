import React from "react";
import Heading from "../../atoms/heading";
import { Wrapper, h2Style, h1Style } from "./Greetings.style";

interface Props {
    greeting: string;
    presentation: string;
}

function Greeting({ greeting, presentation }: Props) {
    return (
        <Wrapper>
            <Heading css={h2Style} rank="2">
                {greeting}
            </Heading>
            <Heading css={h1Style} rank="1">
                {presentation}
            </Heading>
        </Wrapper>
    );
}

export default Greeting;
