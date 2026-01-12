import { style } from "@vanilla-extract/css";

export const frame = style({
  display: "grid",
  gap: "4.5vw",
  gridTemplateColumns: "repeat(4, minmax(0, auto))",
  flexWrap: "wrap",
  width: "70vw",
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
export const button = style({
  backgroundColor: "red",
  border: "none",
  borderRadius: "10px",
  color: "white",
  lineHeight: "40px",
  fontSize: "0.6rem",
  fontWeight: "600",
  height: "40px",
  width: "70vw",
  marginBottom: "60px",
});
