import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const LinkStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    margin-left: 100px;
    text-decoration: none;
    font-weight: 300;
    font-size: 24px;

    @media (max-width: 420px) {
        display: none;
    }

    @media (min-width: 2000px) {
        font-size: 3.5rem;
    }
`;

export const BlackSquare = styled.div`
    display: flex;
    position: absolute;
    height: 50vh;
    width: 100%;
    bottom: 0;
    justify-content: center;
    right: 150px;
    background-color: black;
    align-items: flex-end;
    transition: 1s height;

    &.transition {
        height: 100vh;
    }

    @media (max-width: 420px) {
        right: 0;
        height: 65vh;
        flex-direction: column;
        justify-content: flex-start;
    }

    @media (min-width: 2000px) {
        right: 10%;
        font-size: 2.3rem;
    }
`;

export const ContactMobile = styled.div`
    font-size: 18px;
    color: white;
    margin-left: 20px;
    align-self: flex-start;
    justify-self: flex-start;

    & h4 {
        font-weight: 300;
    }

    @media (min-width: 421px) {
        display: none;
    }
`;
