import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from '@emotion/styled';

const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  text-decoration: none;
`;

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }:Props) => (
  <header>
    <div>
      <h1>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
