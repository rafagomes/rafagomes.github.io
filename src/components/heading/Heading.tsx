import React from "react"

interface Props {
    rank: string
    children: string
}

function Heading({ rank, children, ...otherProps }: Props) {
    const tag = parseInt(rank) > 6 ? "h6" : `h${rank}`

    return React.createElement(tag, otherProps, children)
}

export default Heading
