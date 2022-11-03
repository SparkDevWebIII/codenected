import React, { useState } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import "./Header.scss";
import { Drawer } from "@mui/material";
import { Dropdown } from "./Dropdown.jsx";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  function handleDrawerClick() {
    if (open == false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }

  return (
    <div className="header">
      <img src="" alt="logo" />
      <h1>CodeNected</h1>
      <nav>
  
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <Dropdown title="Projects">
          <NavLink to="/projects" activeClassName="active">
            Find Projects
          </NavLink>
          <NavLink to="/4" activeClassName="active">
            Create Project
          </NavLink>
        </Dropdown>
        <Dropdown title="Events">
          <NavLink to="/events" activeClassName="active">
            Find Events
          </NavLink>
          <NavLink to="/5" activeClassName="active">
            Create Event
          </NavLink>
        </Dropdown>

        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <Dropdown img="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png">
          <NavLink to="/1" activeClassName="active">
            Example Name
          </NavLink>
          <NavLink to="/2" activeClassName="active">
            My Projects
          </NavLink>
          <NavLink to="/3" activeClassName="active">
            My Profile
          </NavLink>
        </Dropdown>
      </nav>
    </div>
  );
}
