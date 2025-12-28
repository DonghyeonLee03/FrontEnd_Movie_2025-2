import { globalStyle } from "@vanilla-extract/css";

globalStyle('body', {
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
