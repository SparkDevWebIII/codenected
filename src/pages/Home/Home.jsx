import React from "react";

import IntroCarousel from "../../components/IntroCarousel/IntroCarousel";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import Communities from "../../components/Communities/Communities";
import People from "../../components/People/People";
import Courses from "../../components/Courses/Courses";
import Events from "../../components/Events/Events";

import "./Home.scss";

export default function Home() {
  return (
    <div>
      <IntroCarousel />
      <FeaturedProjects />
      <div className="inline_components">
        {" "}
        <Communities></Communities>
        <People></People>
      </div>
      <div className="inline_components">
        <Courses></Courses>
        <Events></Events>
      </div>
    </div>
  );
}
