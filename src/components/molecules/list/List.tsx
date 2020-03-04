import React, { ReactElement, ReactNode } from "react";
import { LinkProps } from "../../atoms/navlink/NavLink";

type ListType = "ul" | "ol";

interface Props {
    ListType?: ListType;
    items: string[] | LinkProps[];
    isNav?: boolean;
}

function List({ ListType = "ul", isNav = false, items, ...otherProps }: Props): ReactElement {
    const renderListItems = (): ReactNode => {
        console.log(typeof items);
        return items.map((item, index) => <li key={index}>{item}</li>);
    };

    const renderList = (): ReactElement => {
        if (isNav) {
            return (
                <nav>
                    <ListType {...otherProps}>{renderListItems()}</ListType>
                </nav>
            );
        }
        return <ListType {...otherProps}>{renderListItems()}</ListType>;
    };

    return renderList();
}

export default List;
