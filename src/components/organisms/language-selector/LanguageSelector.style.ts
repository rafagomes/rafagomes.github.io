import { css } from "@emotion/core";

export const listContainer = css`
    display: flex;
    padding-left: 0;
    justify-content: space-between;

    @media (max-width: 420px) {
        padding: 0 10px;
    }
`;

export const listStyle = css`
    list-style: none;
`;

export const linkStyle = css`
    font-size: 1.5rem;
    text-decoration: none;
    color: grey;

    @media (max-width: 420px) {
        font-size: 1.1rem;
    }

    @media (min-width: 2000px) {
        font-size: 3rem;
    }
`;

export const activeLanguage = css`
    ${linkStyle};
    color: black;
`;
