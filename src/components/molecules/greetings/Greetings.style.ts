import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    margin-left: 50px;
    margin-top: calc(100vh / 3.5);

    @media (max-width: 1000px) {
        margin-left: 20px;
    }
`;

export const h2Style = css`
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

export const h1Style = css`
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
