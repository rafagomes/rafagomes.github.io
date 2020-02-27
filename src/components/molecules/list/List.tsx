import React, { ReactNode } from "react"

type listType = "ul" | "ol"

interface Props {
    ListType?: listType
    className?: string
    children: ReactNode
}

function List({ ListType = "ul", className, children, ...otherProps }: Props) {
    return (
        <ListType className={className} {...otherProps}>
            {children}
        </ListType>
    )
}

export default List
