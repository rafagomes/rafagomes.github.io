import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";

const linkStyle = css({
    color: "black",
    fontSize: "23px",
    textDecoration: "none",
    fontFamily: "Roboto",
    fontWeight: 300,
    fontsize: "24px",
});

export interface LinkProps {
    to: string;
    external?: boolean;
    onClick?: () => void;
    active?: boolean;
}

interface NavLinkProps {
    children: string;
    linkProps: LinkProps;
}

function NavLink(props: NavLinkProps): ReactElement {
    const { children } = props;
    const { to, external, onClick, ...otherLinkProps } = props.linkProps;

    const renderLink = (): ReactElement => {
        if (external) {
            return (
                <a
                    css={linkStyle}
                    href={to}
                    onClick={onClick}
                    {...otherLinkProps}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            );
        }

        return (
            <Link to={to} css={linkStyle} {...otherLinkProps}>
                {children}
            </Link>
        );
    };

    return renderLink();
}

export default NavLink;
