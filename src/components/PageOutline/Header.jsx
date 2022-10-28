import React from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import { primaryRoutes as routes } from "../..";

const Header = (props) => {
  return (
    <AppBar position="static" elevation={0}>
      <CssBaseline />

      <Container
        maxWidth="false"
        sx={{
          height: props.height,
          position: "fixed",
          backgroundColor: "black",
          zIndex: 1,
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CodeNected
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routes.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                style={{ textDecoration: "none" }}
                tabIndex="-1"
              >
                {({ isActive }) => (
                  <Button
                    color={
                      isActive && window.location.pathname === path
                        ? "primary"
                        : "secondary"
                    }
                  >
                    {name}
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <NavLink
              key="Login"
              to="/login/"
              style={{ textDecoration: "none" }}
              tabIndex="-1"
            >
              <Button variant="outlined">LOGIN</Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
