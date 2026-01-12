import { style } from "@vanilla-extract/css";

export const list = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const title = style({
  fontSize: "1rem",
  padding: "0px 15vw",
  alignSelf: "flex-start",
  marginTop: "60px",
  marginBottom: "40px",
});
export const myInfo = style({
  backgroundColor: "#262626",
  height: "330px",
  width: "70vw",
  boxSizing: "border-box",
  borderRadius: "15px",
  padding: "20px",
  marginTop: "40px",
});
export const profile = style({
  aspectRatio: "1/1",
  height: "150px",
  borderRadius: "50%",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const photo = style({
  height: "60%",
});
export const nickName = style({
  fontSize: "0.55rem",
  fontWeight: "700",
});
export const reviewCount = style({
  fontSize: "0.55rem",
  fontWeight: "700",
});
export const redNum = style({
  color: "#f33f3f",
  fontSize: "0.55rem",
  fontWeight: "700",
});
export const genre = style({
  fontSize: "0.55rem",
  fontWeight: "700",
});
export const header = style({
  borderBottom: "solid 1px #a9a9a9",
  width: "70vw",
});
export const modeBtn = style({
  backgroundColor: "rgba(0, 0, 0, 0)",
  color: "white",
  fontSize: "0.5rem",
  border: "none",
});
export const select = style({
  borderBottom: "solid 3px #f33f3f",
});
export const listArea = style({
  width: "70vw",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "20px",
  marginBottom: "30px",
});
export const myFrame = style({
  display: "grid",
  gap: "4.5vw",
  gridTemplateColumns: "repeat(4, minmax(0, auto))",
  flexWrap: "wrap",
  width: "60vw",
  marginBottom: "40px",

  "@media": {
    "screen and (min-width: 769px)": {
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    },
    "screen and (min-width: 426px) and (max-width: 769px)": {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },
    "screen and (max-width: 426px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
  },
});
export const moreBtn = style({
  backgroundColor: "red",
  border: "none",
  borderRadius: "10px",
  color: "white",
  lineHeight: "40px",
  fontSize: "0.6rem",
  fontWeight: "600",
  height: "40px",
  width: "60vw",
  marginBottom: "60px",
});
