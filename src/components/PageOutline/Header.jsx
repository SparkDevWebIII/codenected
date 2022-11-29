import React, { useState } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import LoginButton from "../common/WhiteButton";

import "./Header.scss";

export default function Header(props) {
  return (
    <div className="header">
      <div className="logo_container">
        {" "}
        <img src="assets/images/logo.png" alt="logo" className="logo" />
      </div>

      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/groups">Groups</NavLink>
        <NavLink to="/connect">Connect</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <LoginButton link="/register" />
    </div>
  );
}
