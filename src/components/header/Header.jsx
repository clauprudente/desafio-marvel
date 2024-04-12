import React from "react";
import Marvel from "../../assets/marvel.svg?react";
import { StyledLogo, StyledNav, StyledHeader } from "./Header.styles";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <Link to={`/`}>
          <StyledLogo>
            <Marvel />
          </StyledLogo>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};
