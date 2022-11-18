import React from "react";
import { useTheme } from "@mui/material/styles";
import ContentContainer from "../../components/common/ContentContainer";
import { Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const NumberedCircledIcon = ({ value }) => {
  return (
    <Box
      sx={{
        minWidth: "2em",
        height: "2em",
        borderRadius: "100px",
        backgroundColor: "rgba(0, 0, 0, 0.38)",
        textAlign: "center",
        lineHeight: "2em",
        fontSize: "0.75em",
      }}
    >
      {value}
    </Box>
  );
};

const ProjectProgression = ({ projectProgression }) => {
  const theme = useTheme();
  return (
    <ContentContainer
      id="progress-path"
      sx={{
        p: "0.625em",
        ml: "4.25em",
        mr: "3.75em",
      }}
    >
      <Typography sx={{ mb: 4 }} variant="h2">
        Project Progression
      </Typography>
      {projectProgression.map(({ phase, percentageDone, phaseSteps }) => (
        <Box sx={{ mx: 4, mb: 5 }}>
          <Box
            sx={{
              m: "auto",
              width: "87%",
            }}
          >
            <Typography variant="h5" sx={{ m: 1 }}>
              {phase}
            </Typography>
            <Box
              sx={{
                position: "relative",
                height: "0.5em",
                width: "100%",
                backgroundColor: "#a3c8ed",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  height: "0.5em",
                  width: String(percentageDone * 100) + "%",
                  backgroundColor: theme.palette.tertiary.main,
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "1.5em",
              mt: "1.0625em",
              px: "2em",
              "& .grey-line": {
                display: "flex",
                alignItems: "center",
                height: "0.125em",
                width: "100%",
                backgroundColor: "Grey",
                mx: 1,
              },
              "& .phase-step": {
                display: "flex",
                alignItems: "center",
              },
              "& .MuiSvgIcon-root": {
                color: theme.palette.tertiary.main,
              },
              "& .MuiTypography-root": {
                display: "inline",
                whiteSpace: "nowrap",
                fontSize: "0.9em",
                ml: 1,
              },
            }}
          >
            {phaseSteps &&
              phaseSteps.map((phaseStep, index, row) => {
                const phaseStepPercent = (1 / row.length) * index;
                const icon =
                  phaseStepPercent < percentageDone ? (
                    <CheckCircleIcon />
                  ) : (
                    <NumberedCircledIcon value={index + 1} />
                  );
                if (index + 1 === row.length) {
                  // Last one.
                  return (
                    <Box className="phase-step" sx={{ width: "auto" }}>
                      {icon}
                      <Typography>{phaseStep}</Typography>
                    </Box>
                  );
                }
                return (
                  <Box className="phase-step" sx={{ width: "100%" }}>
                    {icon}
                    <Typography>{phaseStep}</Typography>
                    <Box className="grey-line" />
                  </Box>
                );
              })}
          </Box>
        </Box>
      ))}
    </ContentContainer>
  );
};

export default ProjectProgression;
