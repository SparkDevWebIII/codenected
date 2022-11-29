import React from "react";

import GradientButton from "../../General/GradientButton";
import "./ProjectCard.scss";

export default function ProjectCard(props) {
  return (
    <div className="card_container">
      <img src={props.splash} alt="splash" />
      <div className="content_container">
        <div className="left_content">
          <h2>{props.name}</h2>
          <div className="loc_container">
            <img src="assets/images/location.png" alt="loc"></img>
            <span>{props.location}</span>
          </div>
          <div className="mem_container">
            <img src="assets/images/members.png" alt="mem"></img>
            <span>{props.members} members</span>
          </div>
          <GradientButton top="0px" left="-50px" scale="0.5" link="">
            Learn More
          </GradientButton>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
