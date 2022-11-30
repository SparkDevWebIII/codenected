import React from "react";

import GradientButton from "../../common/GradientButton";

import "./CommunityCard.scss";
export default function CommunityCard(props) {

  return (
    <div className="community_card_container">
      <img src={props.splash} alt="" />
      <div className="community_card_info">
        {" "}
        <h2>{props.name}</h2>
        <p>{props.description}</p>{" "}
        <GradientButton scale="0.5" top="-86px" left="-40px" link="">
          Learn More!
        </GradientButton>
        <div className="community_members_container">
          {" "}
          <img src="/assets/images/members.png" alt="" />
          <span>{props.members}</span>
        </div>
      </div>
    </div>
  );
}
