import React from "react";
import styled from "@emotion/styled";

const ArrowDown = styled.span`
    display: block;
    width: 0;
    height: 0;
    margin: 10px auto 10px auto;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white;
`;

function Arrow() {
    return <ArrowDown />;
}

export default Arrow;
