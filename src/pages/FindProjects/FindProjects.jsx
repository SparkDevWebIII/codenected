import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useLoaderData } from "react-router";
import TagsDropdown from "../../components/common/TagsDropdown";
import ActionAreaCard from "../../components/common/ActionAreaCard";
import { Typography, Box, Button } from "@mui/material";
import SearchBar from "./SearchBar";

// filters
const industries = [
  "Web Development",
  "Software Engineering",
  "UI/UX",
  "Agriculture",
  "Machine Learning",
];

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full stack Developer",
  "Data Analyst",
  "Farmer",
];

const locations = [
  "Miami, FL",
  "New York City, NY",
  "San Francisco, CA",
  "Omaha, NE",
];

const technologies = [
  "Django",
  "Bootstrap",
  "RabbitMQ",
  "Gmail API",
  "MySQL",
  "React",
  "Node",
  "Docker",
  "tech 1",
  "tech 2",
  "tech 3",
];

const FindProjects = () => {
  // layout
  const theme = useTheme();
  const headerSearchBarHeight = "150px";
  // cardHeight follows an aspectRatio of 360 x 300
  const cardWidth = 360;
  // projects queried
  const projects = useLoaderData();
  // searchbar
  const [query, setQuery] = useState("");
  // filters
  const [checkedIndustries, setCheckedIndustries] = React.useState([]);
  const [checkedRoles, setCheckedRoles] = React.useState([]);
  const [checkedLocations, setCheckedLocations] = React.useState([]);
  const [checkedTech, setCheckedTech] = React.useState([]);

  const filteredProjects = projects.filter((project) => {
    if (
      project.title.toLowerCase().includes(query.toLowerCase()) &&
      (checkedIndustries.length === 0 ||
        checkedIndustries.some((val) => project.domains.includes(val))) &&
      (checkedRoles.length === 0 ||
        checkedRoles.some((val) =>
          project.rolesNeeded.some((e) => e.position === val)
        )) &&
      (checkedLocations.length === 0 ||
        checkedLocations.includes(project.location)) &&
      (checkedTech.length === 0 ||
        checkedTech.some((val) => project.technologies.includes(val)))
    ) {
      console.log(project.title);
      //returns filtered array
      return project;
    }
    return false;
  });

  const clearFilters = () => {
    console.log(query);
    console.log(checkedIndustries);
    console.log(checkedRoles);
    console.log(checkedLocations);
    console.log(checkedTech);
    setQuery("");
    setCheckedIndustries([]);
    setCheckedRoles([]);
    setCheckedLocations([]);
    setCheckedTech([]);
  };

  return (
    <React.Fragment>
      {/* see Project.jsx on how to create a header 
      with a semi-transparent background image that 
      does not affect font color */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          background: "black",
          // borderBottom: "3px solid white",
          borderBottom: `3px solid ${theme.palette.primary.main}`,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            height: headerSearchBarHeight,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(assets/projecthero.jpg), linear-gradient(#eb01a5, #d13531)`,
            backgroundPosition: "center",
            opacity: 0.25,
          }}
        />
        <Box
          sx={{
            position: "relative",
            height: headerSearchBarHeight,
            p: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "300",
              fontSize: "3.75em",
              lineHeight: "70px",
              letterSpacing: "-0.005em",
            }}
          >
            Projects
          </Typography>
          {/* <Typography
            variant="subtitle2"
            sx={{
              fontSize: "1.25em",
              fontWeight: 500,
              mt: "0.4em",
              mx: "3.3em",
              color: "#DBDBDB",
            }}
          >
            Join one of these projects to improve your technical skills, network
            with like-minded individuals, and build a rewarding product!
          </Typography> */}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", md: "nowrap" },
          alignItems: "flex-start",
          justifyContent: "center",
          py: 3,
        }}
      >
        {/* Filters */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 1,
            width: "100%",
            maxWidth: { xs: "100%", md: 250 },
            // select boxes
            // "& .MuiFormControl-root": {
            //   backgroundColor: "rgba(198, 198, 198, 0.5);",
            // },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              my: 1,
              height: { md: "56px" },
            }}
          >
            <Button variant="contained" onClick={clearFilters}>
              Clear Filters
            </Button>
          </Box>
          <TagsDropdown
            label="Industries"
            options={industries}
            checkedOptions={checkedIndustries}
            setCheckedOptions={setCheckedIndustries}
          />
          <TagsDropdown
            label="Open Roles"
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
          <TagsDropdown
            label="Technologies"
            options={technologies}
            checkedOptions={checkedTech}
            setCheckedOptions={setCheckedTech}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mx: 1 }}>
          {/* Search Bar */}
          <SearchBar query={query} setQuery={setQuery} />
          {/* Project Cards */}
          <Box
            sx={{
              display: "grid",
              width: {
                // when screen size < 900px, make the layout of project cards as wide as the screen
                xs: "100%",
                md: "auto",
              },
              gridTemplateColumns: {
                xs: "100%",
                sm: "1fr 1fr",
                lg: "1fr 1fr 1fr",
              },
            }}
          >
            {filteredProjects.map(({ title, summary, projectId }, index) => {
              return (
                <ActionAreaCard
                  key={index}
                  title={title}
                  summary={summary}
                  projectId={projectId}
                  // NOTE: any changes to size, margins, padding here should
                  // also be done to the other ActionAreaCard when filteredProjects.length === 0 below.
                  sx={{
                    // 360 x 300 aspect ratio, from figma specifications
                    aspectRatio: "1.2/1",
                    // used maxWidth for responsive design
                    maxWidth: {
                      xs: "100%",
                      md: cardWidth,
                    },
                    p: 1,
                  }}
                />
              );
            })}
            {filteredProjects.length === 0 && (
              <>
                <Box sx={{ width: "100%" }}>
                  Sorry, there are no project with those criteria!
                </Box>
                <ActionAreaCard
                  sx={{
                    visibility: "hidden",
                    aspectRatio: "1.2/1",
                    maxWidth: {
                      xs: "100%",
                      md: cardWidth,
                    },
                    p: 1,
                  }}
                />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FindProjects;
