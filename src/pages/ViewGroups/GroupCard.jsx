import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LearnMoreButton from "./LearnMoreButton";
import Typography from "@mui/material/Typography";
import { flexbox } from "@mui/system";
import Grid from "@mui/material/Grid";
import GroupImage from "../../Assets/GroupImage.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";

export default function GroupdCard({
  id,
  name,
  description,
  splash,
  members,
  location,
}) {
  return (
    <Card sx={{ maxWidth: 380 }} className="groupCard">
      <CardMedia
        component="img"
        alt="Group Image"
        height="190"
        image={GroupImage}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12} className="cardHeader">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <Typography gutterBottom variant="h7" component="div">
              <LocationOnIcon /> {location}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              <AccountCircleIcon />
              {members} members
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <LearnMoreButton />
      </CardActions>
    </Card>
  );
}
