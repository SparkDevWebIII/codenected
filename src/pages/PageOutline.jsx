import React from "react";
import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../components/PageOutline/Header";
import Footer from "../components/PageOutline/Footer";

const PageOutline = () => {
  const headerHeight = "66px";

  // This makes the website dark mode
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#ff3366",
      },
      secondary: {
        main: "#fff",
      },
    },
    typography: {
      fontFamily: [
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
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header height={headerHeight} />
        <Box id="detail" sx={{ mt: headerHeight }}>
          <Outlet />
        </Box>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default PageOutline;
