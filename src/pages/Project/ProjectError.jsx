import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import PlainButton from "../../components/common/PlainButton";

const ProjectError = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "150px",
        py: 5,
        background: "rgb(0, 0, 0, 0.15)",
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: "semi-bold" }}>
        Page In Construction
      </Typography>

      <Box sx={{ mt: "50px" }}>
        <PlainButton link={`/projects`}>Go back to Projects</PlainButton>
      </Box>
    </Box>
  );
};

export default ProjectError;
