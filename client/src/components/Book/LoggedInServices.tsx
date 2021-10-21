import React from "react";
import { Tab, Tabs } from "@mui/material";
import { Yoga } from "./Yoga";
import { Energy } from "./Energy";
import { TabPanel } from "../shared/TabPanel";




export const LoggedInServices = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Tabs for selecting a service"
        variant="fullWidth"
      >
        <Tab label="Yoga" {...a11yProps(0)} />
        <Tab label="Guided Energy" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Yoga />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Energy />
      </TabPanel>
    </div>
  );
};
