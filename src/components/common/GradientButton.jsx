import React from "react";
import "./GradientButton.scss";

export default function GradientButton(props) {
  return (
    <a
      href={props.link}
      className="button_container"
      style={{ left: props.left, top: props.top, scale: props.scale }}
    >
      <span className="button_text">{props.children}</span>
    </a>
  );
}
