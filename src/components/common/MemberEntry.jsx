import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Grid, Box, Avatar, Chip } from "@mui/material";

const MemberEntry = ({ name, role }) => {
  const theme = useTheme();
  return (
    <Box
      alignItems="center"
      key={name}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
        mb: "1em",
        p: "1em",
        borderRadius: "4px",
      }}
    >
      <Box>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="subtitle2">{role}</Typography>
      </Box>
      <Box>
        <Avatar sx={{ width: "2.5em", height: "2.5em" }}>
          {name.match(/\b(\w)/g).join("")}
        </Avatar>
      </Box>
    </Box>
  );
};

export default MemberEntry;
