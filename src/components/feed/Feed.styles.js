import { styled } from "../../../stitches.config";

export const StyledFeed = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "1rem",
  marginBottom: "1rem",
  justifyItems: "center",

  "@bp1": { gridTemplateColumns: "repeat(2,1fr)" },
});

export const StyledCard = styled("div", {
  position: "relative",
  display: "grid",
  gridGap: "1rem",
});

export const StyledPhoto = styled("img", {
  display: "grid",
  borderRadius: "0.2rem",
  overflow: "hidden",
  cursor: "pointer",
  objectFit: "fill",
  width: "250px",
  height: "250px",
});

export const StyledTitle = styled("div", {
  position: "absolute",
  bottom: "0px",
  backgroundColor: "black",
  width: "100%",
  color: "white",
  textAlign: "center",
  padding: "0.5rem",
});
