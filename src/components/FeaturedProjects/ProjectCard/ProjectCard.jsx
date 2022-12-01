import React from "react";

import GradientButton from "../../common/GradientButton";
import "./ProjectCard.scss";

export default function ProjectCard({
  splash = "assets/images/hero1.png",
  name,
  location,
  members,
  description,
  projectId
}) {
  return (
    <div className="card_container">
      <img src={splash} alt="splash" />
      <div className="content_container">
        <h2 className="card_header">{name}</h2>
        <div className="left_content">
          <div className="loc_container">
            <img src="assets/images/location.png" alt="loc"></img>
            <span>{location}</span>
          </div>
          <div className="mem_container">
            <img src="assets/images/members.png" alt="mem"></img>
            <span>{members} members</span>
          </div>
          <GradientButton
            // top="-10px" left="-50px" scale="0.5"
            projectId={projectId}
          >
            Learn More
          </GradientButton>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
