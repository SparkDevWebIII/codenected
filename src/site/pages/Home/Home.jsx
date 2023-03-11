import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import FullWidthTabs from "../../components/FullWidthTabs/FullWidthTabs.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <FullWidthTabs />
      <Contact />
    </>
  );
};

export default Home;
