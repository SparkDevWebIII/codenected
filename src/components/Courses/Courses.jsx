import React from "react";
import PlainButton from "../common/PlainButton";
import Flickity from "react-flickity-component";

import "./Courses.scss";
import { data } from "flickity";
import { AttachEmail } from "@mui/icons-material";

export default function Courses() {
  const courseData = [
    {
      key: 0,
      img: "assets/images/ibmcourse.png",
      name: "IBM DevOps and Software Engineering Professional Certificate",
      skills: ["Cloud Native", "Devops", "CI/CD", "Application Development"],
      difficulty: "Beginner",
      type: "Certification",
      length: "15 months",
      rating: 4.7,
      reviewAmt: "1,255",
      link: "https://www.coursera.org/professional-certificates/devops-and-software-engineering",
    },
    {
      key: 1,
      name: "Meta Front-End Developer Professional Certificate",
      img: "assets/images/metacourse.png",
      skills: [
        "Cascading Style Sheets (CSS)",
        "HTML",
        "UI/UX design",
        "React",
        "Javascript",
      ],
      difficulty: "Beginner",
      type: "Certification",
      length: "7 months",
      rating: 4.7,
      reviewAmt: "3,970",
      link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    },
    {
      key: 2,
      name: "IBM Cybersecurity Analyst Professional Certificate",
      img: "assets/images/ibmcourse2.png",
      skills: [
        "IT security analyst",
        "INFOSEC",
        "Malware",
        "Cybersecurity",
      ],
      difficulty: "Beginner",
      type: "Certification",
      length: "8 months",
      rating: 4.6,
      reviewAmt: "8,296",
      link: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst",
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
          <PlainButton scale="0.6" link={info.link}>Learn More!</PlainButton>
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
      <Flickity options={{ fade: true }}>{courseInfo}</Flickity>
    </div>
  );
}
