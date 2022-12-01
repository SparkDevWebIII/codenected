import React from "react";

import "./MemberCard.scss";

export default function MemberCard(props) {
  return (
    <a href={`/members/${props.member_id}`}>
      {" "}
      <div className="membercard_container">
        <div className="membertext_container">
          <h4>{props.name}</h4>
          <span>{props.role}</span>
        </div>
        <img src={props.img} alt="" />
      </div>
    </a>
  );
}
