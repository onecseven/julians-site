import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { Option } from "./Option"
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 480,
    backgroundColor: theme.palette.background.paper,
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
}))

export const Yoga = (props) => {
  return (
    <Option
      name="Yoga for Embodiment"
      description="Our bodies can be the site of so much joy and so much pain. Unfortunately,
the pain can sometimes knock us out of our bodies so we have a harder time
fully experiencing the joy. With Yoga for Embodiment and Transformation we
will co-create a space for exploring how to nurture the Nervous System and the
whole body, mind, and spirit. Gentle, trauma-conscious movements,
mindfulness practices, Vedic philosophy and psycho-somatic education offer
tools and resources to move through the dualities we expe rience in our bodies
so that we can feel a sense of wholeness with all that is. Feeling embodied and in
flow with life opens up the inherent wisdom we carry within us which can be
transformational. Each session is uniquely crafted to fit your specific needs."
      duration={[60]}
    />
  )
}

const Energy = (props) => (
  <Option
    name="Guided Energy Work"
    description="Reiki, prana, qi - tending to this inner life force vitality is a right and a resource
we all have but we’re not always taught the skills to work with our own energy
field. Strong emotions and merging with others’ and the collective energy can
pull us out of alignment with our own inner wisdom and soul purpose. In
these Guided Energy Work sessions, I hold space and offer guidance for you to
explore your subtle body, which may mean tending to places where you feel
stuck and finding the ways you can pave your path forward for your highest
good. Guided Energy Work sessions can offer an opportunity to heal trapped
emotions, anchor into your unique energetic signature to cultivate authentic
presence, shift Timelines, awaken intuition, and strengthen your connection
and sense of belonging to the Earth and the Universe. Each session is uniquely
crafted to fit your specific needs."
    duration={[30, 50]}
  />
)

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

export const OptionsField = () => {
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
        aria-label="simple tabs example"
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
