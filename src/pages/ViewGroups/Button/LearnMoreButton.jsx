import React from "react";
import { Button } from "@mui/material";
import styles from './ButtonStyles.scss'

const LearnMoreButton = () => {
  return (
    <Button
      className="learnMore"
      variant="contained"
      sx={{
        ":hover": {
          bgcolor: "#BF026D", // theme.palette.primary.main
          color: "white",
        },
      }}
    >
      Learn More
    </Button>
  );
};

export default LearnMoreButton;
