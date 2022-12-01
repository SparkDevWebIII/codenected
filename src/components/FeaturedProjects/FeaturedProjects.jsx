import { React, useState, useEffect } from "react";

import ProjectCard from "./ProjectCard/ProjectCard";
import "./FeaturedProjects.scss";
import ProjectCardData from "../../data/projectcard.json";
import Flickity from "react-flickity-component";
import { useLoaderData } from "react-router-dom";


export default function FeaturedProjects() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(
  //     `https://3.222.36.7/projectCards`,
  //     { mode: "no-cors" }
  //   )
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       throw res;
  //     })
  //     .then((result) => {
  //       setData(result);
  //     })
  //     .catch((error) => {
  //       console.error("Error: " + error);
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // console.log(data);
  // console.log(loading);
  // console.log(error);

  // const mappedProjectCards = data.map((project) => (
  //   <ProjectCard
  //     project_id={project.id}
  //     name={project.name}
  //     imageUrl={project.imageUrl}
  //     location={project.location}
  //     members={project.members}
  //     summary={project.summary}
  //   ></ProjectCard>
  // ));

  // return (
  //   <div className="featured_container">
  //     <h1 className="site_main_header">Featured Projects</h1>
  //     <Flickity
  //       options={{
  //         wrapAround: "true",
  //         autoPlay: 4000,
  //         imagesLoaded: true,
  //         initialIndex: 2,
  //       }}
  //     >
  //       {mappedProjectCards}
  //     </Flickity>
  //   </div>
  // );
}
