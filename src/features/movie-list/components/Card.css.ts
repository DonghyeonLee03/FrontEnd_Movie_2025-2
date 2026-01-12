import { style } from "@vanilla-extract/css";

export const card = style({
  width: "100%",
});
export const posterWrapper = style({
  width: "100%",
  aspectRatio: "1/1.5",
  borderRadius: "10%",
  overflow: "hidden",
});
export const poster = style({
  width: "100%",
  height: "100%",
});
export const skeletonUI = style({
  width: "100%",
  height: "100%",
  backgroundColor: "gray",
});
export const title = style({
  fontSize: "0.5rem",
  fontWeight: "600",
});
export const score = style({
  display: "flex",
  fontSize: "0.5rem",
  fontWeight: "500",
});
export const star = style({
  justifySelf: "center",
  marginRight: "3%",
});
