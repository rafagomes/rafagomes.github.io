import React, { ReactElement, ReactNode } from "react";
import NavLink from "../../atoms/navlink/NavLink";

type ListType = "ul" | "ol";

interface Props {
    ListType?: ListType;
    items: string[] | LinkProps[];
    isNav?: boolean;
}

interface ListItem {
    text: string;
    linkProps: LinkProps;
}

function List({ ListType = "ul", isNav = false, items, ...otherProps }: Props): ReactElement {
    const renderListItems = (): ReactNode => (
        items.map((item: ListItem, index: number) => {
            const { text, ...itemProps } = item;
            const linkProps = itemProps;

            if (item.to) {
                return (
                    <li key={index}>
                        <NavLink linkProps={linkProps}>{text}</NavLink>
                    </li>
                );
            } else {
                return (
                    <li key={index}>
                        <li key={index}>{text}</li>
                    </li>
                );
            }
        ));
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
