import React from "react";

import "./DrawerToggleButton.scss";

const DrawerToggleButton = ({ toggleDrawer }) => (
  <button className="toggle-button" onClick={toggleDrawer}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default DrawerToggleButton;
