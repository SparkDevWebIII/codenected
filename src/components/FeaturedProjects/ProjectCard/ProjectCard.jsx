import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
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
        <h2 className="card_header">{title}</h2>
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
          <PlainButton link={`/projects/${projectId}`}>Learn More</PlainButton>
        </div>
        <p>{summary}</p>
      </div>
    </div>
  );
}
