import React from "react";
import PlainButton from "../common/PlainButton";
import Flickity from "react-flickity-component";

import "./Courses.scss";

export default function Courses() {
  const courseData = [
    {
      key: 0,
      img: "assets/images/IBM.png",
      name: "IBM DevOps and Software Engineering Professional Certificate",
      skills: ["Software Engineering", "Cloud Computing", "DevOps", "Python"],
      difficulty: "Beginner",
      type: "Certification",
      length: "3-6 months",
      rating: 4.3,
      reviewAmt: '33,000',
    },
    {
      key: 1,
      name: "IBM DevOps and Software Engineering Professional Certificate",
      img: "assets/images/IBM.png",
      skills: ["Software Engineering", "Cloud Computing", "DevOps", "Python"],
      difficulty: "Beginner",
      type: "Certification",
      length: "3-6 months",
      rating: 4.3,
      reviewAmt: '33,000',
    },
    {
      key: 2,
      name: "IBM DevOps and Software Engineering Professional Certificate",
      img: "assets/images/IBM.png",
      skills: ["Software Engineering", "Cloud Computing", "DevOps", "Python"],
      difficulty: "Beginner",
      type: "Certification",
      length: "3-6 months",
      rating: 4.3,
      reviewAmt: '33,000',
    },
  ];

  const courseInfo = courseData.map((info) => (
    <div className="course_slide">
      <img className="course_splash" src={info.img}></img>
      <div className="course_info_1">
        {" "}
        <h2>{info.name}</h2>
        <span>
          What you'll Learn:{" "}
          {info.skills.map((skill) => (
            <span>{skill}, </span>
          ))}
        </span>
      </div>

      <div className="course_info_2">
        {" "}
        <PlainButton scale="0.6">Learn More!</PlainButton>
        <div className="course_info_2_sub">
          {" "}
          <p>
            {info.difficulty} | {info.type} | {info.length}
          </p>
          <img src="assets/images/star.png" alt="" />
          <span className="courses_rating_text">
            {info.rating} ({info.reviewAmt} reviews)
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="courses_container">
      <h1 className="site_main_header">Courses</h1>
      <Flickity options={{fade: true}}>{courseInfo}</Flickity>
    </div>
  );
}
