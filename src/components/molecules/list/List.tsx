import React, { ReactNode } from "react"
import ListStyle from "./List.styles"

type listType = "ul" | "ol"

interface Props {
    ListType?: listType
    className?: string
    children: ReactNode
}

function List({ ListType = "ul", className, children, ...otherProps }: Props) {
    return (
        <ListType className={className} css={ListStyle} {...otherProps}>
            {children}
        </ListType>
    )
}

export default List
