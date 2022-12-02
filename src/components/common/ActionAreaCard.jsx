import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function ActionAreaCard({ title, summary, projectId, sx }) {
  return (
    <Box sx={{ ...sx }}>
      <Card
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <CardActionArea
          component={RouterLink}
          to={`/projects/${projectId}`}
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            height="45%"
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
    </Box>
  );
}
