import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core"
import { makeStyles, mergeClasses } from "@material-ui/styles"
import React, { useState } from "react"
import { CalendarTest } from "../components/Test/calendarTest"
import { LoginTest } from "../components/Test/LoginTest"
import { RegisterTest } from "../components/Test/RegisterTest"

const useStyles = makeStyles((theme) => ({
  pre: {
    backgroundColor: "#f7f7f7",
  },
}))

export const JASON = ({ jason }) => {
  const classes = useStyles()
  return <pre className={classes.pre}>{jason}</pre>
}

export const Test = (props) => {
  const [component, setComponent] = useState("")
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          What Component to Test?
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={component}
          label="Age"
          onChange={(event) => {
            let newString = event.target.value as string
            setComponent(newString)
          }}
        >
          <MenuItem value={"LOGIN"}>Login</MenuItem>
          <MenuItem value={"REGISTER"}>Register</MenuItem>
          <MenuItem value={"CALENDAR"}>Calendar</MenuItem>
        </Select>
      </FormControl>
      {component === "LOGIN" ? <LoginTest /> : null}
      {component === "REGISTER" ? <RegisterTest /> : null}
      {component === "CALENDAR" ? <CalendarTest /> : null}
    </>
  )
}
// {
//   return <LoginTest></LoginTest>
// }
