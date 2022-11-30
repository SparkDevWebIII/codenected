import React from "react";
import { Typography } from "@mui/material";
import ContentContainer from "../../components/common/ContentContainer";
import PositionEntry from "../../components/common/PositionEntry";

const RolesNeeded = ({ roles }) => {
  return (
    <ContentContainer
      id="roles-needed"
      sx={{
        p: "0.625em",
        ml: "4.25em",
        mr: "3.75em",
        "& .MuiTypography-h2, .MuiTypography-body1": {
          mb: "0.75em",
        },
      }}
    >
      <Typography variant="h2">Roles Needed</Typography>
      {roles.map(({ position, domain, description }) => (
        <PositionEntry
          key={position}
          position={position}
          domain={domain}
          description={description}
        />
      ))}
    </ContentContainer>
  );
};

export default RolesNeeded;
