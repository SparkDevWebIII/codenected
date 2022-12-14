import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LearnMoreButton from "../Button/LearnMoreButton";
import Typography from "@mui/material/Typography";
import { flexbox } from "@mui/system";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";
import styles from "./GroupCardStyles.scss";

export default function GroupdCard({
  group_id,
  title,
  description,
  imageUrl,
  members,
  location,
  link,
}) {
  return (
    <Card sx={{ maxWidth: 380, maxHeight: 450, borderRadius: '32px' }} className="groupCard">
      <CardMedia
        component="img"
        alt="Group Image"
        height="190"
        src={imageUrl}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12} className="cardHeader">
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <Typography gutterBottom variant="body2" component="div">
              <LocationOnIcon /> {location}
            </Typography>
            <Typography variant="body2" component="div">
              <AccountCircleIcon />
              {members} members
            </Typography>
            <LearnMoreButton link={link} />
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="body2"
              color="text.secondary"
              overflowY="hidden"
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
