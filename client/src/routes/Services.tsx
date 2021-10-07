import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Button, Divider, Tab, Tabs } from "@material-ui/core"
import { Yoga } from "../components/Book/Yoga"
import { Energy } from "../components/Book/Energy"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    maxWidth: 480,
    backgroundColor: "#f3f1d1",
  },
  tab: {
    fontSize: "20px",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
  label: {
    fontSize: "1px",
  },
}))

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
  const classes = useStyles()
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
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Tabs for selecting a service"
        variant="fullWidth"
        className={classes.label}
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
