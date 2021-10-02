import { Button } from "@material-ui/core"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Calendar from "react-calendar-mobile"
import { JASON } from "../../routes/Test"
import { dateConverter } from "../shared/dateConverter"
import Collapsable from "./Collapsable"
import { TimeslotTest } from "./TimeslotTest"

export const CalendarTest = (props) => {
  const [date, setdate] = useState("")
  const [json, setJASON] = useState("")
  const [timeslot, setTimeslot] = useState([])
  return (
    <div className="calendar">
      <form
        className="calendarForm"
        onSubmit={(event) => {
          event.preventDefault()
          axios
            .post("/appointments/ondate", { date })
            .then((response) => {
              setJASON(JSON.stringify(response, null, 2))
              setTimeslot(response.data.timeslots)
            })
            .catch((err) => setJASON(JSON.stringify(err, null, 2)))
        }}
      >
        <Calendar
          onSelectDate={(newDate) => {
            let newString = dateConverter(newDate)
            setdate(newString)
          }}
        />{" "}
        <Button
          size="large"
          variant="outlined"
          type="submit"
          color="primary"
          id="form_button"
        >
          Check Day
        </Button>
      </form>
      {timeslot.length > 0 ? <TimeslotTest timeslot={timeslot} /> : null}

      <Collapsable
        name="JSON"
        openedByDefault={false}
        children={<JASON jason={json} />}
      />
    </div>
  )
}

// TODO
// 1. CONNECT IT TO REDUX
