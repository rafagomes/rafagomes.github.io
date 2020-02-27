import React from "react"

type Rank = "1" | "2" | "3" | "4" | "5" | "6"

interface Props {
    rank: Rank
    children: string
}

function Heading({ rank, children, ...otherProps }: Props) {
    const tag = `h${rank}`

    return React.createElement(tag, otherProps, children)
}

export default Heading
