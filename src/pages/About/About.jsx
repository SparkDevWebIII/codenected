import React from "react";
import People from "../../components/People/People";
import { useLoaderData } from "react-router-dom";

import './About.scss'

export default function About() {
  const data = useLoaderData();
  return (
    <div className="about_container">
      <div className="about_banner">
        {" "}
        <img src="assets/images/hero1.png" alt="" />
        <h1>About Us</h1>
      </div>

      <p>
        We are a group of passionate programmers in college and beyond! We
        wanted to create a hub for other passionate people that wanted to work
        on projects together and make a difference in the world!
      </p>
      <People data={data} />
    </div>
  );
}
