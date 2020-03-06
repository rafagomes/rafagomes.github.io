import React, { ReactElement, ReactNode } from "react";
import NavLink from "../../atoms/navlink";
import List from "../../molecules/list";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Li = styled.li`
    list-style: none;
`;

const Ul = styled.ul`
    display: flex;
    max-width: 650px;
    padding-left: 0;
    flex-direction: row;
    justify-content: space-between;
`;

const headerStyle = css`
    position: relative;
    padding: 20px 20px 0 50px;
    margin-top: 0;
    background: white;
    height: 80px;
`;

interface Linkprops {
    to: string;
    text: string;
    external?: boolean;
}

interface Props {
    menuLinks: Linkprops[];
}

function Header({ menuLinks }: Props): ReactElement {
    const renderMenu = (): ReactNode => {
        return <List items={menuLinks} />;
    };

    return (
        <header css={headerStyle}>
            <nav>
                <Ul>{renderMenu()}</Ul>
            </nav>
        </header>
    );
}

export default Header;
