import { makeStyles, Paper } from "@material-ui/core"
import React from "react"
import { CalendarField } from "../components/Book/CalendarField"
import { EmailField } from "../components/Book/EmailField"
import { NameField } from "../components/Book/NameField"
import { OptionsField } from "../components/Book/OptionsField"

const useStyles = makeStyles((theme) => ({
  papier: {
    width: "60%",
    maxWidth: 480,
    backgroundColor: "#f3f1d1",
    marginLeft: "25%",
    marginRight: "25%",
    marginTop: "2%",
    textAlign: "center",
   },
}))



export const Services = (props) => {
  const classes = useStyles()

  return (
    <Paper elevation={3} className={classes.papier}>
        <OptionsField/> 
        {/* <NameField/>
        <EmailField/>
        <CalendarField/>  */}
    </Paper>
  )
}

//TODO
//1. Button underneath length for booking.
//2. New screen for booking, with just name field, email field, calendar and available times.
//3. Then a button for sending the reservation