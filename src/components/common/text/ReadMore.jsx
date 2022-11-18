import React, { useState } from "react";
import { Typography } from "@mui/material";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  if (text.length <= 200) {
    return <Typography variant="body1">{text}</Typography>;
  }
  return (
    <Typography variant="body1">
      {isReadMore ? text.slice(0, 200) + "..." : text}
      <span onClick={toggleReadMore}>
        {isReadMore ? "Read More" : "Read Less"}
      </span>
    </Typography>
  );
};

export default ReadMore;
