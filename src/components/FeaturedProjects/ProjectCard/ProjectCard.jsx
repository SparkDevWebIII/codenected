import React from "react";

import PlainButton from "../../common/PlainButton";
import "./ProjectCard.scss";

export default function ProjectCard(props) {
  return (
    <div className="card_container">
      <img src={props.imageUrl} alt="splash" />
      <div className="content_container">
        <h2>{props.title}</h2>
        <div className="proj_card_subcontainer">
          {" "}
          <div className="left_content">
            <div className="loc_container">
              <img src="assets/images/location.png" alt="loc"></img>
              <span>{props.location}</span>
            </div>
            <div className="mem_container">
              <img src="assets/images/members.png" alt="mem"></img>
              <span>{props.members} members</span>
            </div>
            <PlainButton
              top="0px"
              left="-50px"
              scale="0.5"
              link={props.project_id}
            >
              Learn More
            </PlainButton>
          </div>
          <p>{props.summary}</p>
        </div>
      </div>
    </div>
  );
}
