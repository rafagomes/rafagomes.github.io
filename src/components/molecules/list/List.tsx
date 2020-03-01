import React from "react";

type ListType = "ul" | "ol";

function List({ ListType = "ul", items }: { ListType?: ListType; items: [] }) {
    const renderList = () => {
        return items.map((item, index) => <li key={index}>{item}</li>);
    };
    return <ListType>{renderList()}</ListType>;
}

export default List;
