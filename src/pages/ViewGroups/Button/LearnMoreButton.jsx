import React from "react";
import { Button } from "@mui/material";
import styles from "./ButtonStyles.scss";

const LearnMoreButton = ({ link }) => {
  console.log({ link });
  return (
    <div>
      <Button
        className="learnMore"
        variant="contained"
        size="small"
        sx={{
          mt: 3,
          ":hover": {
            bgcolor: "#BF026D", // theme.palette.primary.main
            color: "white",
          },
        }}
        a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        Learn More
      </Button>
    </div>
  );
};

export default LearnMoreButton;
