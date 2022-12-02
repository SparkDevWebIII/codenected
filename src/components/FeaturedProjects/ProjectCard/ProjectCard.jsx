import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GradientButton from "../../common/GradientButton";
import "./ProjectCard.scss";

export default function ProjectCard({
  name,
  imageUrl,
  location,
  members,
  description,
  projectId,
}) {
  const muiIconStyling = {
    color: "rgb(48,42,72)",
    width: "22px",
    height: "22px",
    objectFit: "fill",
  };
  return (
    <div className="card_container">
      <img src={imageUrl} alt="splash" />
      <div className="content_container">
        <h2 className="card_header">{name}</h2>
        <div className="left_content">
          <div className="loc_container">
            <LocationOnOutlinedIcon sx={muiIconStyling} />
            <span>{location}</span>
          </div>
          <div className="mem_container">
            {/* <img src="assets/images/members.png" alt="mem"></img> */}
            <AccountCircleIcon sx={muiIconStyling} />
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
