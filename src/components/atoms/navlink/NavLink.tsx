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

interface Props {
    children: string;
    linkProps: LinkProps;
}

function NavLink(props: Props): ReactElement {
    const { children, ...otherProps } = props;
    const { to, external, onClick } = props.linkProps;

    const renderLink = (): ReactElement => {
        if (external) {
            return (
                <a
                    css={linkStyle}
                    href={to}
                    onClick={onClick}
                    {...otherProps}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            );
        }

        return (
            <Link css={linkStyle} {...props}>
                {children}
            </Link>
        );
    };

    return renderLink();
}

export default NavLink;
