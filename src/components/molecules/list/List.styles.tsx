import { css } from "@emotion/core"

export default css`
    ul,
    ol {
        max-width: 650px;
        margin: 50px 50px 0 50px;
        padding-left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    li {
        list-style: none;
    }
`
