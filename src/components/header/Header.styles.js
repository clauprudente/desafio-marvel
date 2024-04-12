import { styled } from "@stitches/react";

export const StyledHeader = styled("header", {
  boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
  position: "fixed",
  width: "100%",
  zIndex: "100",
  background: "white",
  top: "0px",
});

export const StyledNav = styled("nav", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "4rem",
});
export const StyledLogo = styled("div", {
  padding: "0.5rem 0",
  svg: { width: "100px", height: "40px" },
});
