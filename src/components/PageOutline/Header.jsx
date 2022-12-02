import React from "react";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "./DrawerToggleButton";
import LoginButton from "../common/WhiteButton";
import Backdrop from "./Backdrop";
import { primaryRoutes } from "../../index";

import "./Header.scss";

export default function Header(props) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  return (
    <>
      {isDrawerOpen && <Backdrop closeDrawer={toggleDrawer(false)} />}
      <div className="header">
        <div className="logo_container">
          {" "}
          <NavLink to="/">
            <img src="https://i.imgur.com/1SAVxx0.png" alt="logo" className="logo" />
          </NavLink>
        </div>

        {/* the two containers below appears on smaller screens */}
        <div className="login-button-mobile">
          <LoginButton link="/register" />
        </div>
        <div className="toggle-button-container">
          <DrawerToggleButton
            toggleDrawer={toggleDrawer((prevState) => !prevState)}
          />
        </div>

        <div className="navbar">
          {/* login-button-desktop disappears on smaller screens */}
          <div className="login-button-desktop">
            <LoginButton link="/register" />
          </div>
          <div
            className={`navbar__pages ${
              isDrawerOpen ? "navbar__pages--opened" : "navbar__pages--collapse"
            }`}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/groups">Groups</NavLink>
            <NavLink to="/connect">Connect</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
