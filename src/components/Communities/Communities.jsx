import React from "react";
import CommunityCard from "./CommunityCard/CommunityCard";
import GradientButton from "../common/GradientButton";

import "./Communities.scss";

export default function Communities() {
  return (
    <div className="communities_container">
      <h1 className="site_main_header">Communities</h1>
      <div className="communities_card_container">
        <CommunityCard
          name="UPE"
          splash="/assets/images/upe.jpg"
          description="Upsilon Pi Epsilon is the largest student organization for technology at FIU!"
          members="5000 members"
        ></CommunityCard>
        <CommunityCard
          name="GDSC"
          splash="/assets/images/gdsc.jpg"
          description="Google Developer Student Clubs is a program supported by Google Developers!"
          members="5000 members"
        ></CommunityCard>
      </div>
      <GradientButton top="-105px" left="310px" link=''>
        Get Started
      </GradientButton>
    </div>
  );
}
