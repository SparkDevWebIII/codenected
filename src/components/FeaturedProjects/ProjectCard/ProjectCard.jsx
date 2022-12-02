import React from "react";

import PlainButton from "../../common/PlainButton";
import "./ProjectCard.scss";

export default function ProjectCard({
  projectId,
  imageUrl,
  title,
  location,
  members,
  summary,
}) {
  return (
    <div className="card_container">
      <img src={imageUrl} alt="splash" />
      <div className="content_container">
        <h2 className="card_header">{title}</h2>
        <div className="left_content">
          <div className="loc_container">
            <img src="assets/images/location.png" alt="loc"></img>
            <span>{location}</span>
          </div>
          <div className="mem_container">
            <img src="assets/images/members.png" alt="mem"></img>
            <span>{members} members</span>
          </div>
          <PlainButton
            link={`/projects/${projectId}`}
          >
            Learn More
          </PlainButton>
        </div>
        <p>{summary}</p>
      </div>
    </div>
  );
}
