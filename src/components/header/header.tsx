import React from "react"
import NavLink from '../nav-link';

interface Linkprops {
  link: string,
  name: string,
  external: Boolean
}

interface Props {
  menuLinks: []
}




function Header({ menuLinks }:Props) {

  const renderMenu = () => {
    return menuLinks.map((linkProps:Linkprops) => {
      const {link, name, ...otherProps} = linkProps;

      return <li key={link}><NavLink to={link} {...otherProps}>{name}</NavLink></li>
    });
  }

  return (
    <header>
      <nav>
        <ul>
          {renderMenu()}
        </ul>
      </nav>
    </header>
  );
}

export default Header
