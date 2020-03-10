import React from "react";
import Heading from "../../atoms/heading";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

interface Props {
    greeting: string;
    presentation: string;
}

const Wrapper = styled.div`
    margin-left: 5%;
    margin-top: 5%;
    @media (max-width: 1000px) and (min-width: 700px) {
        margin-top: 10%;
    }
    @media (max-width: 700px) and (min-width: 421px) {
        margin-top: 18%;
    }
    @media (max-width: 420px) {
        margin-top: 12%;
    }
    @media (min-width: 2000px) {
        margin-top: 7%;
    }
`;

const h2Style = css`
    font-weight: 100;
    font-size: 3rem;
    @media (max-width: 1000px) {
        font-size: 2.5rem;
    }
    @media (max-width: 700px) {
        font-size: 2rem;
    }
    @media (max-width: 530px) {
        font-size: 1.3rem;
    }
    @media (min-width: 2000px) {
        font-size: 6rem;
    }
`;

const h1Style = css`
    font-weight: 300;
    font-size: 4rem;

    @media (max-width: 1000px) {
        font-size: 3.5rem;
    }
    @media (max-width: 850px) {
        font-size: 2.5rem;
    }
    @media (max-width: 530px) {
        font-size: 1.5rem;
    }
    @media (min-width: 2000px) {
        font-size: 9rem;
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
