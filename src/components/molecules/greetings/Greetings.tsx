import React from "react";
import Heading from "../../atoms/heading";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

interface Props {
    greeting: string;
    presentation: string;
}

const Wrapper = styled.div`
    margin-left: 50px;
    margin-top: 5%;
    @media (max-width: 1000px) {
        margin-top: 10%;
    }
    @media (max-width: 700px) {
        margin-top: 18%;
        margin-left: 20px;
    }
    @media (max-width: 420px) {
        margin-top: 12%;
        margin-left: 20px;
    }
`;

const h2Style = css`
    font-weight: 100;
    font-size: 42px;
    @media (max-width: 1000px) {
        font-size: 32px;
    }
    @media (max-width: 700px) {
        font-size: 22px;
    }
`;

const h1Style = css`
    font-weight: 300;
    font-size: 62px;
    @media (max-width: 1000px) {
        font-size: 52px;
    }
    @media (max-width: 700px) {
        font-size: 26px;
    }
    @media (max-width: 420px) {
        font-size: 24px;
    }
`;

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
