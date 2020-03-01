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

    .resume {
        display: flex;
    }
    .resume .name-block {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: black;
        background: white;
        margin-left: -50px;
        padding: 40px 0 20px 50px;
        margin-bottom: 55px;
    }
    .resume h1,
    .resume h2 {
        font-size: 48px;
        font-weight: 300;
        margin: 0 0 30px 0;
    }
    .resume h2 {
        font-size: 36px;
    }
    .resume p,
    .resume h3,
    .resume h4,
    .resume li {
        font-weight: 300;
        line-height: 1.4;
    }
    .resume p {
        margin: 0 0 10px;
    }

    .resume div {
        margin-bottom: 50px;
    }

    .resume h3 {
        font-size: 24px;
        margin: 0 0 5px 0;
    }
    .resume h4 {
        font-size: 24px;
        margin: 0 0 5px 0;
    }
    .sidebar {
        width: 350px;
        margin-right: 10%;
    }
    .main {
        width: 50%;
    }
`;
