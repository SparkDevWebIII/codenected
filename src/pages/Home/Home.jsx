import React from "react";

import IntroCarousel from "../../components/IntroCarousel/IntroCarousel";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import Communities from "../../components/Communities/Communities";
import People from "../../components/People/People";
import Courses from "../../components/Courses/Courses";
import Events from "../../components/Events/Events";
import { useLoaderData } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  const data = useLoaderData();
  const projectData = data.res1;
  const memberData = data.res2;
  const groupData = data.res3;

  return (
    <div>
      <IntroCarousel />
      <FeaturedProjects data={projectData}/>
      <div className="inline_components">
        {" "}
        <Communities data={groupData}></Communities>
        <People data={memberData}></People>
      </div>
      <div className="inline_components">
        <Courses></Courses>
        <Events></Events>
      </div>
    </div>
  );
}
