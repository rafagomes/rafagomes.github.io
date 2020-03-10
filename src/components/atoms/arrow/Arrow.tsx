import React, { ReactElement } from "react";
import styled from "@emotion/styled";

const ArrowDown = styled.span`
    display: block;
    width: 0;
    height: 0;
    margin: 10px auto 10px auto;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white;

    @media (min-width: 2000px) {
        margin: 20px auto 20px auto;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid white;
    }
`;

function Arrow(): ReactElement {
    return <ArrowDown />;
}

export default Arrow;
