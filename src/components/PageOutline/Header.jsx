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
          <img
            src="https://imgur.com/1SAVxx0.png"
            alt="logo"
            className="logo"
          />
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
            {primaryRoutes.map(({ name, path }, index) => (
              <NavLink key={index} to={path}>
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
