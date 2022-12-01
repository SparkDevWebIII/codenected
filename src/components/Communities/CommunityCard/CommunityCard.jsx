import React from "react";

import PlainButton from "../../common/PlainButton";

import "./CommunityCard.scss";
export default function CommunityCard(props) {
  return (
    <div className="community_card_container">
      <img src={props.splash} alt="" />
      <div className="community_card_info">
        {" "}
        <h2>{props.name}</h2>
        <p>{props.description}</p>{" "}
        <PlainButton
          scale="0.5"
          top="-86px"
          left="-40px"
          link={`communities/${props.community_id}`}
        >
          Learn More!
        </PlainButton>
        <div className="community_members_container">
          {" "}
          <a href={`/communities/${props.community_id}`}>
            {" "}
            <img src="/assets/images/members.png" alt="" />
          </a>
          <span>{props.members}</span>
        </div>
      </div>
    </div>
  );
}
