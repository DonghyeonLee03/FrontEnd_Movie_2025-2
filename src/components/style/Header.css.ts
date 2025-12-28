import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "solid 1px rgba(255, 255, 255, 0.5)",
  boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)",
  padding: "10px 20px",
});
export const searchForm = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "350px",
  height: "30px",
  borderRadius: "5px",
  padding: "2px 10px",
  backgroundColor: "white",
  
  '@media': {
    'screen and (min-width: 426px) and (max-width: 769px)': {
      width: "230px",
    },
    'screen and (max-width: 426px)': {
      width: "auto",
    }
  },
  selectors: {
    [`&:hover`]: {
      '@media': {
        'screen and (max-width: 426px)': {
          boxSizing: "border-box",
          height: "34px",
          width: 'calc(100vw - 40px)',
        }
      }
    }
  }
});
export const logo = style({
  selectors: {
    [`&:has(+ ${searchForm}:hover)`]: {
      '@media': {
        'screen and (max-width: 426px)': {
          display: "none",
        }
      }
    }
  }
})
export const searchInput = style({
  width: "100%",
  border: "none",

  '@media': {
    'screen and (max-width: 426px)': {
      display: "none",
    }
  },
  selectors: {
    [`${searchForm}:hover &`]: {
      '@media': {
        'screen and (max-width: 426px)': {
          display: "block",
        }
      }
    }
  }
});
export const searchBtn = style({
  height: "100%",
  aspectRatio: "1/1",
  border: "none",
  backgroundColor: "rgba(0, 0, 0, 0)",
});
export const searchIcon = style({
  height: "70%",
  aspectRatio: "1/1",
});
