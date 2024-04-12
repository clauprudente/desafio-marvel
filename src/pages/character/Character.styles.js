import { styled } from "@stitches/react";

export const StyledContent = styled("section", {
  marginTop: "2rem",
  maxWidth: "50rem",
  padding: "1rem",
  margin: "0 auto",
});

export const StyledTitle = styled("h1", {
  lineHeight: "1",
  fontSize: "3rem",
  margin: "1rem 0",
  position: "relative",
  zIndex: "1",

  "&:after": {
    content: "",
    display: "block",
    width: "1.5rem",
    height: "1.5rem",
    background: "#EB7B59",
    position: "absolute",
    bottom: "5px",
    left: "-5px",
    borderRadius: ".2rem",
    zIndex: "-1",
  },
});
export const StyledImage = styled("img", { borderRadius: ".5rem" });

export const StyledDescription = styled("p", { color: "grey" });

export const StyledDetails = styled("div", { padding: "1rem" });
