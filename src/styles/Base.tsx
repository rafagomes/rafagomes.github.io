import { css } from "@emotion/core";
import "normalize.css";

export default css`
    html,
    body {
        font-weight: 400;
    }

    body {
        padding-top: 80px;
        @media (max-width: 420px) {
            padding-top: 50px;
        }
        @media (min-width: 2000px) {
            padding-top: 150px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    p,
    li,
    strong,
    b,
    span,
    i {
        font-family: "Roboto";
    }

    a:hover {
        opacity: 0.7;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 100;
    }

    h3,
    h4,
    h5,
    h6 {
        text-transform: uppercase;
    }
`;
