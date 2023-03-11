import React from "react";
import "./SlideOne.scss";

const SlideOne = () => {
  return (
    <section className="contained">
      <div className="top">
        <h1 className="slide-one__title">Mission Driven</h1>
        <div className="slide-one__text-container">
          <p className="slide-one__text">
            At Codenected, we are driven by a passion for technology and a
            desire to unite and empower people and communities. Our mission is
            to create a replicable platform where students, organizations, and
            the local population can collaborate to build, learn, and positively
            impact the lives of their families, friends, coworkers, and
            neighbors. We have the potential to break down the barriers that
            prevent people from utilizing the total value of tech and make it
            easier for everyone to contribute to the ways technology may have a
            more significant impact on local and scales and replicate these
            results globally. We are dedicated to fostering a diverse and
            inclusive community where individuals from all backgrounds can
            connect and work together to create a better future.
          </p>
        </div>
      </div>
      <div className="bottom">
        <h1 className="slide-one__title">Current Vision</h1>
        <p className="slide-one__text">
          With a focus on empowering students in South Florida, our team is on a
          quest to bridge the gap between the wealth of talent in the student
          population and the pressing needs of local organizations. We are
          developing a platform that will uncover the most impactful services
          and projects for these organizations, providing students with
          opportunities to put their skills and ideas to the test and make a
          real impact in their communities. Join us as we strive to create a
          better future through the power of technology and collaboration.
        </p>
      </div>
    </section>
  );
};

export default SlideOne;
