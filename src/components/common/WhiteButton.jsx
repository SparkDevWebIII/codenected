import React from "react";
import "./WhiteButton.scss";

export default function LoginButton(props) {
  return (
    <a className="login_button_a_tag" href={props.link}>
      {" "}
      <div className="login_button_container">
        <span className="login_button_text"> Sign In </span>
      </div>
    </a>
  );
}
