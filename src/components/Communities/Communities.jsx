import React from "react";
import CommunityCard from "./CommunityCard/CommunityCard";
import GradientButton from "../common/GradientButton";

import "./Communities.scss";

export default function Communities(props) {
  const data = props.data;
  
  const mappedCommunities = data.slice(0,2).map((group) => (
      <CommunityCard
        group_id={group.group_id}
        name={group.title}
        splash={group.imageUrl}
        description={group.description}
        members={group.members}
      ></CommunityCard>
  ));
  console.log(mappedCommunities[0])
  return (
    <div className="communities_container">
      <h1 className="site_main_header">Groups</h1>
      <div className="communities_card_container">
        {mappedCommunities}
      </div>
      <GradientButton top="-105px" left="310px" link="/groups">
        Get Started
      </GradientButton>
    </div>
  );
}
