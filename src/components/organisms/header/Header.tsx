import List from "../../molecules/list";

import { css } from "@emotion/core";
import { LinkProps } from "../../atoms/navlink/NavLink";

const headerStyle = css`
    position: relative;
    padding: 20px 20px 0 50px;
    margin-top: 0;
    background: white;
    height: 80px;

    li {
        list-style: none;
    }

    @media (max-width: 420px) {
        padding: 5px 20px 0 5%;
        height: 50px;
    }
    @media (min-width: 2000px) {
        height: 130px;
    }
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
    @media (max-width: 420px) {
        a {
            font-size: 16px;
        }
    }

    @media (min-width: 2000px) {
        max-width: 45%;
        a {
            font-size: 4rem;
        }
    }
`;

function Header({ menuLinks }: List) {
    const renderMenu = () => {
        return <List css={rowList} isNav={true} items={menuLinks} />;
    };

    return <header css={headerStyle}>{renderMenu()}</header>;
}

export default Header;
