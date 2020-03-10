import List from "../../molecules/list";
import { LinkProps } from "../../atoms/navlink/NavLink";
import { headerStyle, rowList } from "./Header.style";

interface List {
    text: string;
    menuLinks: LinkProps[];
}

function Header({ menuLinks }: List) {
    const renderMenu = () => {
        return <List css={rowList} isNav={true} items={menuLinks} />;
    };

    return <header css={headerStyle}>{renderMenu()}</header>;
}

export default Header;
