import React, { useState, useEffect } from "react";
import GeneralTabs from "../../components/common/GeneralTabs";
import ActionAreaCard from "../../components/common/ActionAreaCard";
import ProfileCard from "./ProfileCard";
import { Box } from "@mui/system";
import { Typography, Grid, Link} from "@mui/material";

const about =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium vitae sed at scelerisque viverra lacus donec praesent. Gravida id nunc, iaculis porttitor sed amet pulvinar maecenas orci. Arcu duis nullam phasellus gravida feugiat. Fermentum erat nullam adipiscing eget suspendisse. Tincidunt etiam cursus integer massa. Commodo egestas diam phasellus cras habitant. Odio eget fermentum dictumst non. Venenatis a in amet sit a at in turpis nunc sed.";

const OverviewTab = () => {

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
      
      <Grid container justifyContent="center" alignItems="flex-start">
        {/*ABOUT BOX*/}
        <ProfileCard />
        <Box display="flex" flexDirection="column" sx={{ width: "775px", ml:"84px" }} wrap="wrap">
          <Typography fontSize="24px" sx={{ mb: "9px" }}>
            About
          </Typography>
          <Box sx={{ height: "129px" }}>
            <Typography
              fontSize="16px"
              lineHeight="18.75px"
              sx={{ width: "775px", height: "129px" }}
            >
              {about}
            </Typography>
          </Box>
          <Box>
            <Box display="flex" flex-direction="row" justifyContent="start">
              <Typography fontSize="24px">Featured Projects</Typography>
              <Link
                component="button"
                underline="always"
                sx={{ ml: "36px", mt: "8px" }}
                OnClick={() => {
                }}
              >
                See more
              </Link>
            </Box>
            {/* FEATURED PROJECTS CARD */}

            <Grid
              direction="row"
              container
              justifyContent="start"
              alignItems="center"
              spacing={5}
              sx={{ mt: 0, p: 0 }}
            >
              {projects.map(({ title, summary, projectId }, index) => {
                return (
                  <Grid item>
                    <ActionAreaCard title={title} summary={summary} projectId={projectId} />
                  </Grid>
                );
              })}
            </Grid>
            <Box display="flex" flex-direction="row" justifyContent="start" sx={{mt:'34px'}}>
              <Typography fontSize="24px">Groups</Typography>
              <Link
                component="button"
                underline="always"
                sx={{ ml: "36px", mt: "8px" }}
                OnClick={() => {
                }}
              >
                See more
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

const ProjectsTab = () => {
  return (
    <React.Fragment>
      <Grid container direction="row" justifyContent="center" alignItems="flex-start">
        <ProfileCard />
        <Box sx={{ width: "775px", border: "1px solid white", ml: "84px" }}></Box>
      </Grid>
    </React.Fragment>
  );
};

const Profile = (tabMarginLeft) => {
  const tabs = [
    {
      title: "Overview",
      component: <OverviewTab />,
    },
    {
      title: "Projects",
      component: <ProjectsTab />,
    },
  ];

  return (
    <React.Fragment>
      <Box sx={{ pt: 4 }}>
        <GeneralTabs tabs={tabs} tabMarginLeft="710px"/>
      </Box>
    </React.Fragment>
  );
};

export default Profile;