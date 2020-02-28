import { css, jsx } from "@emotion/core"
import { Link } from "react-router-dom"

const linkStyle = css`
    color: black;
    text-decoration: none;
    font-size: 24px;
`

interface Props {
    children: string
    to: string
    external?: Boolean
}

function NavLink(props: Props) {
    const { children, to, external, ...otherProps } = props

    const renderLink = () => {
        if (external) {
            return (
                <a
                    css={linkStyle}
                    href={to}
                    {...otherProps}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            )
        }

        return (
            <Link css={linkStyle} {...props}>
                {children}
            </Link>
        )
    }

    return renderLink()
}

export default NavLink
