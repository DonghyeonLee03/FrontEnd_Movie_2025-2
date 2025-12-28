import { style } from "@vanilla-extract/css";

export const menu = style({
  position: "absolute",
  width: "100px",
  top: "60px",
  right: "16px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
export const tail = style({
  position: "absolute",
  zIndex: "2",
  width: "15px",
});
export const list = style({
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  margin: "0",
  top: "7.5px",
  width: "100%",
  padding: "0",
  backgroundColor: "#f4f6f9",
  borderRadius: "10px",
  overflow: "hidden",
});
export const item = style({
  height: "44px",
  width: "100%",
  textAlign: "center",
  borderStyle: "solid",
  borderWidth: "1px 0px",
  borderColor: "#888888",
  lineHeight: "44px",
  color: "black",
  fontSize: "16px",
  fontWeight: "600",

  ':hover': {
    color: "#f33f3f",
  }
});
