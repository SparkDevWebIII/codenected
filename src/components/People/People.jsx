import React from "react";
import MemberCard from "./MemberCard/MemberCard";

import "./People.scss";

export default function People(props) {
  const data = props.data;
  
  const mappedMembers = data.slice(0,5).map((member) => (
    <MemberCard
      member_id={member.member_id}
      name={member.name}
      role={member.position}
      img={member.profileImage}
      
    ></MemberCard>
  ));

  return (
    <div className="people_container">
      <h1 className="site_main_header">People</h1>
      <div className="members_container">
        <div className="memberheadings_container">
          {" "}
          <h3>Members</h3>
          <a href="/connect">See all</a>
        </div>

        <div className="mapped_members">{mappedMembers}</div>
      </div>
    </div>
  );
}
