import React from "react"
import { makeStyles } from "@mui/material/styles"
import { Box, Button, Divider, Tab, Tabs } from "@mui/material"
import { Yoga } from "../components/Book/Yoga"
import { Energy } from "../components/Book/Energy"



const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

export const OptionsField = (props) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    }
  }

  return (
    <div >
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
  )
}
