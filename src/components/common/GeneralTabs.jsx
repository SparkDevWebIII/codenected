import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// tabs is an array of objects with each object having the following attributes:
// title: String, component: JSX.Element
// {
//   title: "Project Details",
//   component: <ProjectDetails />
// }

export default function GeneralTabs({ tabs, tabMarginLeft }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="general tabs" sx={{ml: `${tabMarginLeft}`}}>
          {tabs.map(({ title }, index) => (
            <Tab label={title} key={title} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map(({ title, component }, index) => (
        <TabPanel
          value={value}
          key={title}
          index={index}
          children={component}
        />
      ))}
    </Box>
  );
}
