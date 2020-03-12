import React, { ReactElement, ReactNode } from "react";
import NavLink, { LinkProps } from "../../atoms/navlink/NavLink";

type ListType = "ul" | "ol";

interface Props {
    ListType?: ListType;
    items: any;
    isNav?: boolean;
}

interface ListItem {
    text: string;
    css?: CSS;
    link?: LinkProps;
}

function List({ ListType = "ul", isNav = false, items, ...otherProps }: Props): ReactElement {
    const renderListItems = (): ReactNode => {
        return items.map((item: ListItem, index: number) => {
            const { text, ...itemProps } = item;

            if (itemProps.link) {
                return (
                    <li key={index}>
                        <NavLink linkProps={itemProps.link}>{text}</NavLink>
                    </li>
                );
            }

            return <li key={index}>{item}</li>;
        });
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
