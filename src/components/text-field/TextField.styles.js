import { styled } from "@stitches/react";

export const StyledTextField = styled("input", {
  border: "1px solid #eee",
  display: "block",
  width: "100%",
  fontSize: "1rem",
  padding: "0.8rem",
  borderRadius: "0.4rem",
  background: "#eee",
  transition: "0.2s",
});

export const StyledWrapper = styled("div", { marginBottom: "1rem" });

export const StyledLabel = styled("label", {
  display: "block",
  fontSize: "1rem",
  lineHeight: "1",
  paddingBottom: "0.5rem",
});

export const StyledError = styled("p", {
  color: "#cf4647",
  fontSize: "0.875rem",
  marginTop: "0.25rem",
});
