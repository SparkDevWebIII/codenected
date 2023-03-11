import React from "react";
import "./SlideSix.scss";
import Card from "../../Card/Card.jsx";
import Grid from "@mui/material/Grid";
import image from "../../../assets/images/test.png";

const SlideFive = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={4}>
        <a href="https://www.codenected.live/">
          <Card
            title="Non-Profits"
            description="Local Businesses in need of technology to help them achieve their goals"
            image={image}
            imageTitle="design steps"
          />
        </a>
      </Grid>
      <Grid item xs={4}>
        <Card
          title="Students"
          description="Local Businesses in need of technology to help them achieve their goals"
          image={image}
          imageTitle="design steps"
        />
      </Grid>
      <Grid item xs={4}>
        <Card
          title="Bootcamps"
          description="Local Businesses in need of technology to help them achieve their goals"
          image={image}
          imageTitle="design steps"
        />
      </Grid>
      <Grid item xs={4}>
        <Card
          title="Small Businesses"
          description="Local Businesses in need of technology to help them achieve their goals"
          image={image}
          imageTitle="design steps"
        />
      </Grid>
      <Grid item xs={4}>
        <Card
          title="Traditional Colleges"
          description="Local Businesses in need of technology to help them achieve their goals"
          image={image}
          imageTitle="design steps"
        />
      </Grid>
      <Grid item xs={4}>
        <Card
          title="Coorporations"
          description="Local Businesses in need of technology to help them achieve their goals"
          image={image}
          imageTitle="design steps"
        />
      </Grid>
    </Grid>
  );
};

export default SlideFive;
