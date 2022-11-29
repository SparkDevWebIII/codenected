import React from "react";
import { useTheme } from "@mui/material/styles";
import ContentContainer from "../../components/common/ContentContainer";
import MemberEntry from "../../components/common/MemberEntry";
import { Typography, Grid, Box, Avatar, Chip } from "@mui/material";

const ProjectDetails = ({
  concept,
  goal,
  currentsystem,
  members,
  technologies,
}) => {
  const theme = useTheme();

  return (
    <Grid container id="project-details">
      <Grid item xs={8}>
        <ContentContainer
          sx={{
            minHeight: "600px",
            ml: "4.25em",
            mr: "3.75em",
            "& .MuiTypography-h2, .MuiTypography-body1": {
              mb: "0.75em",
            },
          }}
        >
          <Typography variant="h2">Project Details</Typography>
          <Typography variant="h6">Concept</Typography>
          <Typography variant="body1">{concept}</Typography>
          <Typography variant="h6">Goal</Typography>
          <Typography variant="body1">{goal}</Typography>
          <Typography variant="h6">Current System</Typography>
          <Typography variant="body1">{currentsystem}</Typography>
          <Typography variant="h5" sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
            Technologies Used
          </Typography>
          {technologies.map((tech) => (
            <Chip sx={{ mt: "0.625em", mr: "1.55em" }} label={tech} />
          ))}
        </ContentContainer>
      </Grid>
      <Grid item xs={4}>
        <Box
          sx={{
            height: "600px",
            position: "relative",
            overflow: "hidden",
            mr: "4.25em",
          }}
        >
          <ContentContainer
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right:
                "-15px" /* Increase/Decrease this value for cross-browser compatibility */,
              overflowY: "scroll",
            }}
          >
            <Typography variant="h2" sx={{ mb: "0.75em" }}>
              Members
            </Typography>
            <Box>
              {members.map(({ name, role }) => (
                <MemberEntry name={name} role={role} />
              ))}
            </Box>
          </ContentContainer>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
