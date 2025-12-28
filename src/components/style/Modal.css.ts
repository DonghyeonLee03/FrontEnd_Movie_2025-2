import { style } from "@vanilla-extract/css";

export const overlay = style({
  width: "100vw",
  height: "100vh",
  zIndex: "1000",
  top: "0",
  left: "0",
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});
export const modal = style({
  width: "740px",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#212121",

  '@media': {
    'screen and (min-width: 426px) and (max-width: 769px)': {
      width: "426px",
      height: "300px",
    },
    'screen and (max-width: 426px)': {
      alignSelf: "flex-end",
      width: "100vw",
      height: "385px",
    }
  }
});
export const header = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "10px 20px",
  height: "15%",
  borderBottom: "solid 1px rgba(241, 241, 241, 0.25)",
  justifyContent: "center",
  position: "relative",
});
export const title = style({
  fontSize: "0.6rem",
  fontWeight: "600",
  margin: "0",
});
export const button = style({
  position: "absolute",
  right: "15px",
  color: "white",
  border: "none",
  width: "30px",
  height: "30px",
  lineHeight: "30px",
  borderRadius: "50%",
  backgroundColor: "#383839",
  fontSize: "30px",
});
export const frame = style({
  height: "85%",
  boxSizing: "border-box",
  padding: "4%",
  display: "flex",
});
export const poster = style({
  width: "40%",
  marginRight: "4%",

  '@media': {
    'screen and (max-width: 426px)': {
      display: "none",
    }
  }
});
export const info = style({
  width: "60%",
  display: "flex",
  flexDirection: "column",
  fontSize: "0.5rem",
  fontWeight: "400",

  '@media': {
    'screen and (min-width: 426px) and (max-width: 769px)': {
      fontSize: "0.4rem",
    },
    'screen and (max-width: 426px)': {
      width: "100%",
    }
  }
});
export const detail = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "3%",
});
export const genre = style({
  flexWrap: "wrap",
});
export const star = style({
  height: "0.6rem",
  margin: "0 2%",
});
export const overview = style({
  height: "70%",
  fontSize: "0.4rem",
  marginBottom: "5%",
  overflowY: "auto",
});
export const scoreBoard = style({
  height: "15%",
  borderRadius: "16px",
  padding: "0px 5%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#383839",

  '@media': {
    'screen and (min-width: 426px) and (max-width: 769px)': {
      borderRadius: "10px",
    },
    'screen and (max-width: 426px)': {
      padding: "0px 10vw",
      height: "70px",
    }
  }
});
export const score = style({
  textAlign: "end",
  width: "0.62rem",
  boxSizing: "border-box",
  marginRight: "3%",
});
export const comment = style({
  fontSize: "0.4rem",

  '@media': {
    'screen and (min-width: 426px) and (max-width: 769px)': {
      fontSize: "0.3rem",
    },
    'screen and (max-width: 426px)': {
      display: "none",
    }
  }
});
