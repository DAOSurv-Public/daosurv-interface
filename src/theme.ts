import { createTheme, ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    // fontFamily: ['"{name}"', "sans-serif"].join(","),
    fontSize: 16,
    fontWeightBold: 600,
    fontWeightMedium: 500,
    fontWeightRegular: 300,
    fontWeightLight: 300,
    /* minor third modular scale */
    // TODO: update h3 & h1
    h1: {
      fontSize: "2.75rem",
      lineHeight: "110%",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      lineHeight: "110%",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight: "110%",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.25rem",
      lineHeight: "110%",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.125rem",
      lineHeight: "110%",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      lineHeight: "110%",
      fontWeight: 700,
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: "150%",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.75rem",
      lineHeight: "150%",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1.5rem",
      lineHeight: "100%",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.75rem",
      lineHeight: "100%",
      fontWeight: 500,
    },
    caption: {
      fontSize: "0.625rem",
      lineHeight: "100%",
      fontWeight: 400,
    },
    button: {
      fontSize: "0.875rem",
      lineHeight: "150%",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 4, // unit multiplier. i.e., sx={{ borderRadius: 1 }} means 4px
  },
  shadows: [
    "none",
    "4px 4px 4px 0 rgba(0,0,0,0.2), -4px -4px 4px 0 rgba(255,255,255,0.04)", //outset button shadows
    "inset 4px 4px 4px 0 rgba(0,0,0,0.2), inset -4px -4px 4px 0 rgba(255,255,255,0.04)", //inset button shadows
    "8px 8px 8px 0 rgba(0,0,0,0.2), -8px -8px 8px 0 rgba(255,255,255,0.04)", //outset row shadows,
    "inset 8px 8px 8px 0 rgba(0,0,0,0.2), inset -8px -8px 8px 0 rgba(255,255,255,0.04)", //inset row shadows,
    "0px 3px 5px -1px rgba(0,0,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.04),0px 1px 14px 0px rgba(0,0,0,0.02)",
    "0px 3px 5px -1px rgba(0,0,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.04),0px 1px 18px 0px rgba(0,0,0,0.02)",
    "0px 4px 5px -2px rgba(0,0,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.04),0px 2px 16px 1px rgba(0,0,0,0.02)",
    "0px 5px 5px -3px rgba(0,0,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.04),0px 3px 14px 2px rgba(0,0,0,0.02)",
    "0px 5px 6px -3px rgba(0,0,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.04),0px 3px 16px 2px rgba(0,0,0,0.02)",
    "0px 6px 6px -3px rgba(0,0,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.04),0px 4px 18px 3px rgba(0,0,0,0.02)",
    "0px 6px 7px -4px rgba(0,0,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.04),0px 4px 20px 3px rgba(0,0,0,0.02)",
    "0px 7px 8px -4px rgba(0,0,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.04),0px 5px 22px 4px rgba(0,0,0,0.02)",
    "0px 7px 8px -4px rgba(0,0,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.04),0px 5px 24px 4px rgba(0,0,0,0.02)",
    "0px 7px 9px -4px rgba(0,0,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.04),0px 5px 26px 4px rgba(0,0,0,0.02)",
    "0px 8px 9px -5px rgba(0,0,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.04),0px 6px 28px 5px rgba(0,0,0,0.02)",
    "0px 8px 10px -5px rgba(0,0,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.04),0px 6px 30px 5px rgba(0,0,0,0.02)",
    "0px 8px 11px -5px rgba(0,0,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.04),0px 6px 32px 5px rgba(0,0,0,0.02)",
    "0px 9px 11px -5px rgba(0,0,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.04),0px 7px 34px 6px rgba(0,0,0,0.02)",
    "0px 9px 12px -6px rgba(0,0,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.04),0px 7px 36px 6px rgba(0,0,0,0.02)",
    "0px 10px 13px -6px rgba(0,0,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.04),0px 8px 38px 7px rgba(0,0,0,0.02)",
    "0px 10px 13px -6px rgba(0,0,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.04),0px 8px 40px 7px rgba(0,0,0,0.02)",
    "0px 10px 14px -6px rgba(0,0,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.04),0px 8px 42px 7px rgba(0,0,0,0.02)",
    "0px 11px 14px -7px rgba(0,0,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.04),0px 9px 44px 8px rgba(0,0,0,0.02)",
    "0px 11px 15px -7px rgba(0,0,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.04),0px 9px 46px 8px rgba(0,0,0,0.02)",
  ],
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        elevation1: {
          boxShadow: "none",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: "#12101C",
          borderRadius: 16,
          padding: 24,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "white",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          textTransform: "none",
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
