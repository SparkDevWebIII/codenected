import React from "react";

import PlainButton from "../../common/PlainButton";

import "./CommunityCard.scss";
export default function CommunityCard(props) {
  return (
    <div className="community_card_container">
      <a className="community_image_container" href={`groups/${props.group_id}`}>
        <img src={props.splash} alt="" />
      </a>
      <div className="community_card_info">
        {" "}
        <h2>{props.name}</h2>
        <p>{props.description}</p>{" "}
        <div className="community_subinfo">
          {" "}
          <PlainButton
            scale="0.5"
            link={`groups/${props.group_id}`}
          >
            Learn More!
          </PlainButton>{" "}
          <img src="/assets/images/members.png" alt="" />
          <span>{props.members}</span>
        </div>
      </div>
    </div>
  );
}
