import React, { useState } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import LoginButton from "../common/WhiteButton";

import "./Header.scss";

export default function Header(props) {
  return (
    <div className="header">
      <div className="logo_container">
        {" "}
        <NavLink to="/"><img src="assets/images/logo.png" alt="logo" className="logo" /></NavLink>
      </div>

      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <LoginButton link="/login" />
    </div>
  );
}
