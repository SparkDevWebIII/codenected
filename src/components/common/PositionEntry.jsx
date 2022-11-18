import React from "react";
import { Typography, Link, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

const PositionEntry = ({
  position = "title",
  domain = "none",
  description = "example text",
  link,
}) => {
  const theme = useTheme();

  return (
    <StyledBox>
      <Grid container direction="row" alignItems="center">
        <Typography variant="h5">{position}</Typography>
      </Grid>
      {link && (
        <Box>
          <Link href={link}>
            <FontAwesomeIcon icon={faGlobeAmericas} /> Position description
          </Link>
        </Box>
      )}
      <Typography variant="body2">{domain}</Typography>
      <Typography
        variant="body1"
        sx={{ lineHeight: "1.5em", letterSpacing: "0.01em", my: "2em" }}
      >
        {description}
      </Typography>
      <Button sx={{ color: theme.palette.tertiary.main }}>Apply</Button>
    </StyledBox>
  );
};

export default PositionEntry;
