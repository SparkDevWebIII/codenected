import React from "react";
import { Box } from "@mui/system";
import { Icon, Typography, Link, Grid, Card, CardMedia, Chip } from "@mui/material";
import {
  LinkedIn,
  LocationOnOutlined,
  SchoolOutlined,
  GitHub,
  InsertDriveFile,
} from "@mui/icons-material";

export default function ProfileCard() {
  let userInfo = {
    profilePic: "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg",
    name: "Carlos Matheus",
    location: "Davie",
    state: "FL",
    school: "Florida International University",
    github: "https://www.github.com/carlosmathe",
    linkedin: "https://www.linkedin.com/in/carlosmathe/",
    CV: "https://www.google.com",
  };

  const skill = ["Java", "PHP", "Figma", "React", "Html", "CSS", "JavaScript", "Node.js "];


  return (
    <Grid container sx={{ maxWidth: 250, zIndex:1, mt: -10, ml:"-1080px"  }} direction="column" wrap="wrap" position="absolute">
      <Card sx={{ maxWidth: 228, maxHeight: 233, borderRadius: 50, ml: '11px' }}>
        <CardMedia component="img" height="228" width="233" image={userInfo.profilePic} />
      </Card>
      <Typography variant="h5" sx={{ mt: 2, fontSize: 30, width: "auto" }}>
        {userInfo.name}
      </Typography>
      <Box sx={{ mt: 2, textAlign: "left", alignItems: "left" }}>
        <Box display="flex" sx={{ mt: 1 }}>
          <Icon component={LocationOnOutlined} fontSize="medium" sx={{ mr: 0.5 }} />
          {userInfo.location + ", " + userInfo.state}
        </Box>
        <Box display="flex" sx={{ mt: 1 }}>
          <Icon component={SchoolOutlined} fontSize="medium" sx={{ mr: 0.5 }} /> {userInfo.school}
        </Box>
        <Box display="flex" sx={{ mt: 1 }}>
          <Icon component={GitHub} fontSize="medium" sx={{ mr: 0.5 }} />
          <Link
            color="#FFFF"
            underline="none"
            href={userInfo.github}
            target="_blank"
            rel="noopener"
            label="Github"
          >
            {" "}
            Github{" "}
          </Link>
        </Box>

        <Box display="flex" sx={{ mt: 1 }}>
          <Icon component={InsertDriveFile} fontSize="medium" sx={{ mr: 0.5 }} />
          <Link color="#FFFF" underline="none" href={userInfo.CV} target="_blank" rel="noopener">
            {" "}
            CV{" "}
          </Link>
        </Box>

        <Box display="flex" sx={{ mt: 1 }}>
          <Icon component={LinkedIn} fontSize="medium" sx={{ mr: 0.5 }} />
          <Link
            color="#FFFF"
            underline="none"
            href={userInfo.linkedin}
            target="_blank"
            rel="noopener"
          >
            {" "}
            Linkedin{" "}
          </Link>
        </Box>
      </Box>

      <Typography sx={{ mt: 2 }}>Skills:</Typography>
      {/* SKILL'S GRID*/}
      <Grid container gap={"10px"} sx={{ width: 250, mt: 1, mb: 1 }}>
        {skill.map((skill) => {
          return (
            <Chip
            label={skill}
            color="default"
            variant="filled"
            sx={{ width: "auto", height: "24px", backgroundColor: "#D9D9D9", color: "#000000", borderRadius:'10px', ptb:'6px', plr:'4px' }}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}