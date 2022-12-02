import React, { useState, useEffect } from "react";
import GeneralTabs from "../../components/common/GeneralTabs";
import ProjectCard from "../../components/FeaturedProjects/ProjectCard/ProjectCard";
import ProfileCard from "./ProfileCard";
import { Box } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import CommunityCard from "../../components/Communities/CommunityCard/CommunityCard";
import { useLoaderData } from "react-router-dom";
import { getProjectList } from "../../utils/projectQueries";
import ActionAreaCard from "../../components/common/ActionAreaCard";

const OverviewTab = ({ member, projects }) => {
  return (
    <React.Fragment>
      <Grid container justifyContent="center" alignItems="flex-start">
        {/*ABOUT BOX*/}
        <ProfileCard data={member} />
        <Box
          display="flex"
          flexDirection="column"
          sx={{ width: "775px", ml: "84px" }}
          wrap="wrap"
        >
          <Typography fontSize="24px" sx={{ mb: "9px" }}>
            About
          </Typography>
          <Box sx={{ height: "129px" }}>
            <Typography
              fontSize="16px"
              lineHeight="18.75px"
              sx={{ width: "775px", height: "129px" }}
            >
              {member.about}
            </Typography>
          </Box>
          <Box>
            <Box display="flex" flex-direction="row" justifyContent="start">
              <Typography fontSize="24px">Featured Projects</Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gap: 2,
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
              {projects.map(
                (
                  { title, summary, imageUrl, location, project_id, members },
                  index
                ) => {
                  return (
                    <Box
                      sx={{
                        "& .card_container": {
                          mx: 0,
                          width: "100%",
                          // 360 x 300 aspect ratio, from figma specifications
                          height: "327px",
                          aspectRatio: {
                            xs: "1.2/1",
                            md: "1.2/1",
                          },
                          // used maxWidth for responsive design
                          maxWidth: {
                            xs: "100%",
                            md: cardWidth,
                          },
                          "& > img": {
                            height: "45%",
                          },
                          "& .content_container": {
                            mx: { xs: "30px", sm: "15px", md: "30px" },
                            "& a": {
                              scale: { xs: "0.6", sm: "0.45" },
                            },
                          },
                          "& .card_header": {
                            fontSize: "1.5em",
                          },
                        },
                      }}
                      key={index}
                    >
                      <ProjectCard
                        title={title}
                        imageUrl={imageUrl}
                        location={location}
                        members={members.length}
                        summary={summary}
                        projectId={project_id}
                      />
                    </Box>
                  );
                }
              )}
              {projects.length === 0 && (
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
            <Box
              display="flex"
              flex-direction="row"
              justifyContent="start"
              sx={{ mt: "34px" }}
            >
              <Typography fontSize="24px">Groups</Typography>
              <Box container display="flex" sx={{ ml: "-100px", mt: "20px" }}>
                <CommunityCard
                  name="UPE"
                  splash="/assets/images/upe.jpg"
                  description="Upsilon Pi Epsilon is the largest student organization for technology at FIU!"
                  members="5000 members"
                ></CommunityCard>
                <CommunityCard
                  name="GDSC"
                  splash="/assets/images/gdsc.jpg"
                  description="Google Developer Student Clubs is a program supported by Google Developers!"
                  members="5000 members"
                ></CommunityCard>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

const cardWidth = 360;

const ProjectsTab = ({ member, projects }) => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <ProfileCard data={member} />

        {/* Project Cards */}
        <Box
          sx={{
            ml: "400px",
            display: "grid",
            gap: 2,
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
          {projects.map(
            (
              { title, summary, imageUrl, location, project_id, members },
              index
            ) => {
              return (
                <Box
                  sx={{
                    "& .card_container": {
                      mx: 0,
                      width: "100%",
                      // 360 x 300 aspect ratio, from figma specifications
                      height: "auto",
                      aspectRatio: {
                        xs: "1.2/1",
                        md: "1.2/1",
                      },
                      // used maxWidth for responsive design
                      maxWidth: {
                        xs: "100%",
                        md: cardWidth,
                      },
                      "& > img": {
                        height: "45%",
                      },
                      "& .content_container": {
                        mx: { xs: "30px", sm: "15px", md: "30px" },
                        "& a": {
                          scale: { xs: "0.6", sm: "0.45" },
                        },
                      },
                      "& .card_header": {
                        fontSize: "1.5em",
                      },
                    },
                  }}
                  key={index}
                >
                  <ProjectCard
                    title={title}
                    imageUrl={imageUrl}
                    location={location}
                    members={members.length}
                    summary={summary}
                    projectId={project_id}
                  />
                </Box>
              );
            }
          )}
          {projects.length === 0 && (
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
      </Grid>
    </React.Fragment>
  );
};

const Profile = (tabMarginLeft) => {
  const member = useLoaderData();
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    const resp = await fetch(
      "https://r7fu8gohdd.execute-api.us-east-1.amazonaws.com/projectCards"
    );
    let jsonData = await resp.json();
    const projects = jsonData.filter((project) => {
      if (
        member.projects.some(
          (memberProject) => memberProject.project_id === project.project_id
        )
      ) {
        return project;
      }
      return;
    });
    setProjects(projects);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const tabs = [
    {
      title: "Overview",
      component: (
        <OverviewTab member={member} projects={projects.slice(0, 2)} />
      ),
    },
    {
      title: "Projects",
      component: <ProjectsTab member={member} projects={projects} />,
    },
  ];

  return (
    <React.Fragment>
      <Box sx={{ pt: 4, maxWidth: "100%", maxHeight: "100%" }}>
        <GeneralTabs tabs={tabs} tabMarginLeft="610px" />
      </Box>
    </React.Fragment>
  );
};

export default Profile;
