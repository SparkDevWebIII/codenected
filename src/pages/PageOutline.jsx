import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "../components/PageOutline/Header";
import Footer from "../components/PageOutline/Footer";

const PageOutline = () => {
  const headerHeight = "66px";

  return (
    <React.Fragment>
      <CssBaseline />
      <Header height={headerHeight} />
      <Box id="detail" sx={{ mt: headerHeight }}>
        <Outlet />
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default PageOutline;
