import React, { ReactElement, ReactNode } from "react";
import List from "../../molecules/list";

import { css } from "@emotion/core";
import { LinkProps } from "../../atoms/navlink/NavLink";

const headerStyle = css`
    position: relative;
    padding: 20px 20px 0 50px;
    margin-top: 0;
    background: white;
    height: 80px;
`;

interface List {
    text: string;
    menuLinks: LinkProps[];
}

const rowList = css`
    display: flex;
    max-width: 650px;
    padding-left: 0;
    flex-direction: row;
    justify-content: space-between;
`;

function Header({ menuLinks }: List): ReactElement {
    const renderMenu = (): ReactNode => {
        return <List css={rowList} isNav={true} items={menuLinks} />;
    };

    return <header css={headerStyle}>{renderMenu()}</header>;
}

export default Header;
