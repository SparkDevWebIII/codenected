import React from "react";
import MemberCard from "./MemberCard/MemberCard";

import "./People.scss";

export default function People(props) {
  const data = props.data;
  
  const mappedMembers = data.map((member) => (
    <MemberCard
      member_id={member.member_id}
      name={member.name}
      role={member.position}
      img={member.profileImage}
      
    ></MemberCard>
  ));

  return (
    <div className="people_container">
      <h1 className="site_main_header">Members</h1>
      <div className="members_container">
        <div className="memberheadings_container">
          {" "}
        </div>

        <div className="mapped_members">{mappedMembers}</div>
        <div className="mapped_members_small">
          <div className="mem_smdiv1">
            {mappedMembers.slice(0,6)}
          </div>
          <div className="mem_smdiv2">
            {mappedMembers.slice(6,12)}
          </div>
        
        </div>
      </div>
    </div>
  );
}
