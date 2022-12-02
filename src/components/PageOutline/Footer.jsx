import React from "react";
// import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  CssBaseline,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { primaryRoutes as routes } from "../..";
import HorizontalDivider from "../design/HorizontalDivider";

const Footer = () => {
  const theme = useTheme();
  return (
    <Container
      component="footer"
      maxWidth={false}
      sx={{
        opacity: .7,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "2em",
        backgroundColor: "black",
        "& > *": {
          mb: "2rem",
        },
      }}
    >
      <Box component="a" href="/#" sx={{ mb: "1rem" }}>
        {/* <Typography
          component="a"
          sx={{
            color: "inherit",
            textDecoration: "none",
            fontSize: "2.25em",
            fontWeight: 500,
          }}
          href="/#"
        >
          CodeNected
        </Typography> */}
        <img
          src="https://imgur.com/1SAVxx0.png"
          href="/#"
          alt="Codenected logo"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexGrow: 1,
          justifyContent: "center",
          alignContent: "center",
          gap: { xs: "1rem", sm: "2rem" },
        }}
      >
        {routes.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            // style instead of sx because NavLink is not mui
            style={{
              textDecoration: "none",
            }}
            tabIndex="-1"
          >
            {() => (
              <Typography
                sx={{
                  textAlign: "center",
                  color: "white",
                  // color: theme.components.MuiSvgIcon.styleOverrides.root.color,
                  transition: "all 400ms ease",
                  "&:hover": { color: theme.palette.primary.main },
                }}
                color="primary"
              >
                {name}
              </Typography>
            )}
          </NavLink>
        ))}
      </Box>

      {/* <div className="footer__socials">
        <a href="https://linkedin.com">
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com">
          <AiOutlineGithub />
        </a>
      </div> */}
      <HorizontalDivider />

      <Box>
        <small>&copy; CodeNected. All rights reserved.</small>
      </Box>
    </Container>
  );
};

export default Footer;
