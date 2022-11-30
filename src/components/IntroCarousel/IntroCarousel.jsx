import { selectUnstyledClasses } from "@mui/base";
import React from "react";
import { useState, useEffect } from "react";
import GradientButton from "../common/GradientButton";
import "./IntroCarousel.scss";
import { IDLE_FETCHER } from "@remix-run/router";

export default function IntroCarousel() {
  const imageData = [
    "assets/images/hero1.png",
    "assets/images/yellow.jpg",
    "assets/images/green.png",
    "assets/images/red.jpg",
  ];

  const [slide, setSlide] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const mappedSlides = imageData.map((image) => (
    <img
      className="intro_slide fade"
      style={{
        transform: `translate(-${slide * 100}%)`,
        transition: "transform 3s ease-in-out",
      }}
      src={image}
    ></img>
  ));
  const carouselInfiniteScroll = () => {
    if (slide === mappedSlides.length - 1) {
      return setSlide(0);
    }
    return setSlide(slide + 1);
  };
  useEffect(() => {
    const updatePos = (event) => {
      let pos = window.scrollY;
      let pageHeight = window.innerHeight;
      setOpacity((pageHeight - pos-300) / pageHeight);
    };

    window.addEventListener("scroll", updatePos);

    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 10000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", updatePos);
    };
  });

  const renderArrow = () => {
    return (
      <img
        className="intro_arrow"
        src="assets/images/leftchevron.png"
        style={{opacity: opacity}}
      ></img>
    );
  };

  return (
    <div className="intro_container">
      <div className="carousel_container">{mappedSlides}</div>
      <div className="content_container">
        <h1>Connecting Coders</h1>
        <h3>
          A space to create and find local group projects while gaining
          knowledge and connections on the way!
        </h3>
        <GradientButton top="-700px" left="100px" link="">
          Get Started
        </GradientButton>
        {renderArrow()}
      </div>
    </div>
  );
}
