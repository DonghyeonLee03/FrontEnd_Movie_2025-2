import { style } from "@vanilla-extract/css";

export const myStarRate = style({
  display: "flex",
  height: "100%",
  alignItems: "center",
  margin: "0px 3%",

  '@media': {
    'screen and (max-width: 426px)': {
      height: "20vw",
    }
  }
});
export const button = style({
  backgroundColor: "rgba(0, 0, 0, 0)",
  border: "none",
  height: "40%",
  padding: "0",

  '@media': {
    'screen and (min-width: 426px) and (max-width: 769px)': {
      height: "13.25px",
    }
  }
});
export const star = style({
  height: "100%",
});
