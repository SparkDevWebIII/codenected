import React, { useState } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import LoginButton from "../General/WhiteButton";

import "./Header.scss";

export default function Header(props) {
  return (
    <div className="header">
      <div className="logo_container">      <img src="assets/images/logo.png" alt="logo" className="logo" /></div>


      <div className="navbar">
        <NavLink>Projects</NavLink>
        <NavLink>Groups</NavLink>
        <NavLink>Connect</NavLink>
        <NavLink>About</NavLink>
      </div>
      <LoginButton link="" />
    </div>
  );
}
