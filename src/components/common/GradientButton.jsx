import React from "react";
import "./GradientButton.scss";
import { NavLink } from "react-router-dom";

export default function GradientButton(props) {
  return (
    <NavLink
      style={{ left: props.left, top: props.top, scale: props.scale }}
      to={`/projects/${props.projectId}`}
      className="button_container"
    >
      <span className="button_text">{props.children}</span>
    </NavLink>
  );
}
