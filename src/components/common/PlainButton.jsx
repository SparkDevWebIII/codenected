import React from "react";
import "./PlainButton.scss";

export default function PlainButton(props) {
  return (
    <a
      href={`${props.link}`}
      className="plain_button_container"
      style={{ left: props.left, top: props.top, scale: props.scale }}
    >
      <span className="button_text">{props.children}</span>
    </a>
  );
}
