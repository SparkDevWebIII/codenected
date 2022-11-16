import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { flexbox } from "@mui/system";
import Grid from '@mui/material/Grid'
import GroupImage from "../../Assets/GroupImage.png"




export default function GroupdCard({id, title, description, image}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Group Image"
        height="140"
        image= {GroupImage}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
