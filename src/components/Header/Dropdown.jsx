import React, { useState } from "react";
import './Dropdown.scss';

export function Dropdown(props) {
  const [display, setDisplay] = React.useState("none");

  function handleClick() {
    if (display == "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }

  return (
    <div className="dropdown">
      <div className="head" onClick={handleClick}>
        {props.title}

        <img src="https://cdn-icons-png.flaticon.com/512/58/58979.png" alt="" />
      </div>

      <div className="contents" style={{ display: display }}>{props.children}</div>
    </div>
  );
}
