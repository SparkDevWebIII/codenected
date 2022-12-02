import React from "react";

import "./MemberCard.scss";

export default function MemberCard(props) {
  return (
    <div className="membercard_container">
      <div className="membertext_container">
        <h4>{props.name}</h4>
        <span>{props.role}</span>
      </div>
      <img src={props.img} alt="" />
    </div>
  );
}
