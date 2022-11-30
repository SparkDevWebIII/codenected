import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function ActionAreaCard({ title, summary, projectId }) {
  return (
    <Card>
      <CardActionArea
        sx={{ width: 345, height: 273 }}
        component={RouterLink}
        to={`/projects/${projectId}`}
      >
        <CardMedia
          component="img"
          height="140"
          src="assets/projecthero.jpg"
          alt="developers working"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
