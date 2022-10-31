import "./FindProjects.css";
import React from "react";
import TagsDropdown from "../../components/common/TagsDropdown";
import { Typography, Grid, Box } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

const industries = [
  "Web Development",
  "Software Engineering",
  "UI/UX",
  "Agriculture",
  "foo"
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

  return (
    <Box>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className="header-filters"
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
          xs={12}
          sm={12}
          md={12}
        >
          <TagsDropdown
            label="Industries"
            options={industries}
            checkedOptions={checkedIndustries}
            setCheckedOptions={setCheckedIndustries}
          />
          <TagsDropdown
            label="Roles"
            options={roles}
            checkedOptions={checkedRoles}
            setCheckedOptions={setCheckedRoles}
          />
          <TagsDropdown
            label="Locations"
            options={locations}
            checkedOptions={checkedLocations}
            setCheckedOptions={setCheckedLocations}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FindProjects;
