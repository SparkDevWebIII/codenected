import { React, useState, useEffect } from "react";

import ProjectCard from "./ProjectCard/ProjectCard";
import "./FeaturedProjects.scss";
import ProjectCardData from "../../data/projectcard.json";
import Flickity from "react-flickity-component";
import { useLoaderData } from "react-router-dom";
import { useGetData } from "../../utils/getData";

export default function FeaturedProjects(props) {
  const data = props.data;

  const mappedProjectCards = data.map((project) => (
    <ProjectCard
      projectId={project.project_id}
      title={project.title}
      imageUrl={project.imageUrl}
      location={project.location}
      members={project.members}
      summary={project.summary}
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
