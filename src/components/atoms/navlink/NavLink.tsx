import React from "react";
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

interface Props {
    children: string;
    to: string;
    external?: Boolean;
}

function NavLink(props: Props) {
    const { children, to, external, ...otherProps } = props;

    const renderLink = () => {
        if (external) {
            return (
                <a css={linkStyle} href={to} {...otherProps} target="_blank">
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
