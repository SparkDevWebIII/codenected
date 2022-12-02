import React from "react";
import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../components/PageOutline/Header";
import Footer from "../components/PageOutline/Footer";

const PageOutline = () => {
  // this headerHeight should be the same as the height in header.scss
  const headerHeight = "80px";
  const tertiary = "#1976D2";

  // This makes the website dark mode
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#038E9A",
      },
      secondary: {
        main: "#fff",
      },
      tertiary: {
        main: tertiary,
      },
      text: {
        primary: "#fff",
      },
    },
    typography: {
      fontFamily: [
        "Roboto",
        "Helvetica Neue",
        "HelveticaNeue-Medium",
        "HelveticaNeue-Light",
        "Roboto",
        "sans-serif",
      ].join(","),
      h1: {
        lineHeight: "1",
      },
    },
    components: {
      MuiTypography: {
        variants: [
          {
            props: { variant: "h2" },
            style: {
              fontSize: "34px",
              fontWeight: "400",
            },
          },
          {
            props: { variant: "body1" },
            style: {
              whiteSpace: "pre-wrap",
            },
          },
        ],
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage:
              "linear-gradient(180deg, #051625 0%, #132B41 49.48%, #051320 100%)",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#1976D2",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: tertiary,
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#A155A7",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "black",
          },
        },
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header height={headerHeight} />
        <Box id="detail" sx={{ minHeight: "100vh", mt: headerHeight }}>
          <Outlet />
        </Box>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default PageOutline;
