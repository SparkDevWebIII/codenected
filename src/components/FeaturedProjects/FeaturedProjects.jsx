import React from "react";

import ProjectCard from "./ProjectCard/ProjectCard";
import "./FeaturedProjects.scss";
import ProjectCardData from "../../data/projectcard.json";
import Flickity from "react-flickity-component";

export default function FeaturedProjects() {
  const mappedProjectCards = ProjectCardData.map((project) => (
    <ProjectCard
      key={project.id}
      name={project.name}
      splash={project.splash}
      location={project.location}
      members={project.members}
      description={project.description}
    ></ProjectCard>
  ));

  return (
    <div className="featured_container">
      <h1 className="site_main_header">Featured Projects</h1>
      <Flickity
        options={{
          wrapAround: "true",
          autoPlay: 4000,
          imagesLoaded: true,
          initialIndex: 2,
        }}
      >
        {mappedProjectCards}
      </Flickity>
    </div>
  );
}
