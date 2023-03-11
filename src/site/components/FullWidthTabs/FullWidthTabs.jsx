import * as React from "react";
import "./FullWidthTabs.scss";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SlideOne from "../Slides/SlideOne/SlideOne";
import SlideTwo from "../Slides/SlideTwo/SlideTwo";
import SlideThree from "../Slides/SlideThree/SlideThree";
import SlideFour from "../Slides/SlideFour/SlideFour";
import SlideFive from "../Slides/SlideFive/SlideFive";
import SlideSix from "../Slides/SlideSix/SlideSix";
import image from "../../assets/images/space.gif";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100vw",
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          width="100vw"
          justifyContent="center"
          alignContent="center"
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Mission" {...a11yProps(0)} />
          <Tab label="Who We Help" {...a11yProps(1)} />
          <Tab label="How We Help" {...a11yProps(2)} />
          <Tab label="Market" {...a11yProps(3)} />
          <Tab label="Competition" {...a11yProps(4)} />
          <Tab label="ProtoTypes & WireFrames" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
      >
        <SlideOne />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <SlideTwo />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Component 3
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        Component 4
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        Prototype
      </TabPanel>
      <TabPanel value={value} index={5} dir={theme.direction}>
        <SlideSix />
      </TabPanel>
    </Box>
  );
}
