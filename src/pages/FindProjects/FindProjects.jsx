import React, { useState, useEffect } from "react";
import TagsDropdown from "../../components/common/TagsDropdown";
import ActionAreaCard from "../../components/common/ActionAreaCard";
import { Typography, Grid } from "@mui/material";

const industries = [
  "Web Development",
  "Software Engineering",
  "UI/UX",
  "Agriculture",
];

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full-stack Developer",
  "Data Analyst",
  "Farmer",
];

const locations = [
  "Miami, Florida",
  "New York City, New York",
  "San Francisco, California",
  "Omaha, Nebraska",
];

const FindProjects = () => {
  // filters
  const [checkedIndustries, setCheckedIndustries] = React.useState([]);
  const [checkedRoles, setCheckedRoles] = React.useState([]);
  const [checkedLocations, setCheckedLocations] = React.useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./../data/projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setProjects(json);
      });
  }, []);

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "#0b0b0b",
          py: 5,
        }}
      >
        <Grid item justifyContent="center" xs={12} sm={12} md={12}>
          <Typography variant="h1">Projects</Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
          xs={12}
          sm={12}
          md={12}
        >
          <Grid item>
            <TagsDropdown
              label="Industries"
              options={industries}
              checkedOptions={checkedIndustries}
              setCheckedOptions={setCheckedIndustries}
            />
          </Grid>
          <Grid item>
            <TagsDropdown
              label="Roles"
              options={roles}
              checkedOptions={checkedRoles}
              setCheckedOptions={setCheckedRoles}
            />
          </Grid>
          <Grid item>
            <TagsDropdown
              label="Locations"
              options={locations}
              checkedOptions={checkedLocations}
              setCheckedOptions={setCheckedLocations}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ py: 5, px: 15 }}
      >
        {projects.map(({ title, summary, projectId }, index) => {
          return (
            <Grid item key={index}>
              <ActionAreaCard
                title={title}
                summary={summary}
                projectId={projectId}
              />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default FindProjects;
