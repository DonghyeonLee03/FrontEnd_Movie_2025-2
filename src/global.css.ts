import { globalStyle } from "@vanilla-extract/css";

globalStyle('body', {
  height: "100%",
  color: "white",
  margin: 0,
});
globalStyle('#root', {
  display: "block",
  backgroundColor: "black",
});
globalStyle('main', {
  width: "100vw",
});

globalStyle('html', {
  height: "100%",
  backgroundColor: "black",
  
  '@media': {
    'screen and (min-width: 769px)': {
      fontSize: "34px",
    },
    'screen and (min-width: 426px) and (max-width: 769px)': {
      fontSize: "28px",
    },
    'screen and (max-width: 426px)': {
      fontSize: "36px",
    }
  }
});
