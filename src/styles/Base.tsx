import { css } from "@emotion/core";
import "normalize.css";

export default css`
    html,
    body {
        font-weight: 400;
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

    .sidebar {
        width: 350px;
        margin-right: 10%;
    }
    .main {
        width: 50%;
    }
`;
