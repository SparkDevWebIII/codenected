import React from "react";
import MemberCard from "./MemberCard/MemberCard";

import "./People.scss";

export default function People() {
  const data = [
    {
      id: 0,
      name: "John Smith",
      role: "CEO",
      img: "assets/images/Avatar.png",
    },
    {
      id: 1,
      name: "John Smith",
      role: "CEO",
      img: "assets/images/Avatar.png",
    },
    {
      id: 2,
      name: "John Smith",
      role: "CEO",
      img: "assets/images/Avatar.png",
    },
    {
      id: 3,
      name: "John Smith",
      role: "CEO",
      img: "assets/images/Avatar.png",
    },
    {
      id: 4,
      name: "John Smith",
      role: "CEO",
      img: "assets/images/Avatar.png",
    },
  ];

  const mappedMembers = data.map((member) => (
    <MemberCard
      member_id={member.id}
      name={member.name}
      role={member.role}
      img={member.img}
      
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
