import React from "react";
import { useLoaderData } from "react-router";
import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";
import defaultprojectimage from "../../assets/defaultprojectimage.png";
import { useTheme } from "@mui/material/styles";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import HorizontalDivider from "../../components/design/HorizontalDivider";
import ProjectDetails from "./ProjectDetails";
import RolesNeeded from "./RolesNeeded";
import ProjectProgression from "./ProjectProgression";

const Project = () => {
  const overviewHeight = "350px";
  const theme = useTheme();
  const data = useLoaderData();

  return (
    <>
      {/* hero image */}
      <Box
        sx={{
          // maxWidth: "1600px",
          m: "auto",
          pt: "1.5em",
          px: "1.1em",
          "& .MuiTypography-h1, .MuiTypography-subtitle1, .MuiTypography-h6, .MuiLink-root": {
            color: "#DBDBDB",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            background: "rgba(54, 54, 54)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              height: overviewHeight,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${defaultprojectimage}), linear-gradient(#eb01a5, #d13531)`,
              backgroundPosition: "center",
              opacity: 0.14,
            }}
          />
          <Box
            sx={{
              position: "relative",
              height: overviewHeight,
              p: 2,
            }}
          >
            <Typography variant="h1" sx={{ fontSize: "3.75em", mb: 2 }}>
              {data.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "1.5em",
                fontWeight: 500,
                mt: "0.4em",
                mx: "3.3em",
              }}
            >
              {data.summary}
            </Typography>
            <Box
              sx={{
                position: "absolute",
                bottom: 15,
                mx: "3.3em",
                "& > *": {
                  display: "inline",
                  mr: "1.25em",
                },
                "& .MuiSvgIcon-root": {
                  position: "relative",
                  top: "0.25em",
                },
                "& .MuiTypography-h6, .MuiLink-root": {
                  display: "inline",
                  ml: "0.24em",
                },
                "& .MuiLink-root": {
                  color: theme.components.MuiLink.styleOverrides.root.color,
                },
              }}
            >
              <Box>
                <LocationOnIcon />
                <Typography variant="h6">{data.location}</Typography>
              </Box>
              <Box>
                <DateRangeIcon />
                <Typography variant="h6">{data.dateCreated}</Typography>
              </Box>
              <Box>
                <RemoveRedEyeOutlinedIcon />
                <Link sx={{ fontSize: "1.25em" }} href={data.githubRepo}>
                  {data.githubRepo}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "2.75em",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            px: "3.625em",
            py: "0.75em",
            "& .MuiLink-root": {
              fontSize: "1.25em",
              mr: 2,
              lineHeight: "0.5em",
            },
          }}
        >
          <Link href="#project-details">Project Details</Link>
          <Link href="#progress-path">Progress Path</Link>
          <Link href="#roles-needed">Roles Needed</Link>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "1475px", mx: "auto" }}>
        {/* this box below sets the spacing between project details, 
      progress path, the horizontal divider and roles needed */}
        <Box sx={{ py: "2.8125em", "& > *": { mb: "6.25em" } }}>
          <ProjectDetails
            concept={data.concept}
            goal={data.goal}
            currentsystem={data.currentsystem}
            members={data.members}
            technologies={data.technologies}
          />
          <HorizontalDivider />
          <ProjectProgression projectProgression={data.projectProgression} />
          <HorizontalDivider />
          <RolesNeeded roles={data.rolesNeeded} />
        </Box>
      </Box>
    </>
  );
};

export default Project;
