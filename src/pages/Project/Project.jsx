import React from "react";
import { useLoaderData } from "react-router";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import projecthero from "../../assets/projecthero.jpg";
import { useTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import GeneralTabs from "../../components/common/GeneralTabs";

const ProjectDetails = ({ description }) => {
  return <Typography component={'span'} variant="body1">{description}</Typography>;
};

const RolesNeeded = () => {
  return <React.Fragment>roles needed</React.Fragment>;
};

const ProjectProgression = () => {
  return <React.Fragment>project progression</React.Fragment>;
};

const Project = () => {
  const theme = useTheme();
  const data = useLoaderData();
  const tabs = [
    {
      title: "Project Details",
      component: <ProjectDetails description={data.description} />,
    },
    {
      title: "Roles Needed",
      component: <RolesNeeded />,
    },
    {
      title: "Project Progression",
      component: <ProjectProgression />,
    },
  ];

  return (
    <React.Fragment>
      {/* hero image */}
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "black",
          zIndex: -1,
          borderBottom: `3px solid ${theme.palette.primary.main}`,
        }}
      >
        <Box
          sx={{
            height: "33vh",
            width: "100vw",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${projecthero}), linear-gradient(#eb01a5, #d13531)`,
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          height: "33vh",
          width: "100vw",
          p: 2,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: 80, mb: 2 }}>
          {data.title}
        </Typography>
        <Typography variant="subtitle">{data.summary}</Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: 15,
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          <Box display="inline" m={1}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <Typography variant="p" sx={{ ml: 1 }}>
              {data.location}
            </Typography>
          </Box>
          <Box display="inline" m={1}>
            <FontAwesomeIcon icon={faCalendar} />
            <Typography variant="p" sx={{ ml: 1 }}>
              {data.dateCreated}
            </Typography>
          </Box>
          <Box display="inline" m={1}>
            <FontAwesomeIcon icon={faGlobe} />
            <Typography variant="p" sx={{ ml: 1 }}>
              {data.githubRepo}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <GeneralTabs tabs={tabs} />
      </Box>
    </React.Fragment>
  );
};

export default Project;
