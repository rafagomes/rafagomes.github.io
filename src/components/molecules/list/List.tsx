import React from "react";

type ListType = "ul" | "ol";

function List({ ListType = "ul", items, ...otherProps }: { ListType?: ListType; items: string[] }) {
    const renderList = () => {
        return items.map((item, index) => <li key={index}>{item}</li>);
    };
    return <ListType {...otherProps}>{renderList()}</ListType>;
}

export default List;
