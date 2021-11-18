import React from "react"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../store/hooks"
import { CalendarField } from "../components/Book/CalendarField"
import { setMeetingType } from "../store/features/form/formSlice"
import { Button } from "@mui/material"
import { Timeslot } from "../components/Book/Timeslot"
import { POST_APPT } from "../store/features/form/formActions"
import { Link } from "@reach/router"

const text = {
  energy: "Guided Energy Work",
  yoga: "Yoga for Embodiment and Transformation",
}

export const Book = (props) => {
  let { service } = props
  const dispatch = useDispatch()
  const { timeslot, date } = useSelector((state) => state.form)
  const { user_id } = useSelector((state) => state.login)
  const handleChange = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <h2>Booking {text[service]}</h2>
      <CalendarField />
      <Timeslot />
      <Button
        size="large"
        variant="contained"
        type="submit"
        color="primary"
        id="form_button"
        onClick={handleChange}
        disabled={timeslot ? false : true}
      >
        <Link to="/order-preview" className="nav-link">
          Preview Order
        </Link>
      </Button>
    </>
  )
}

// if (timeslot && date && user_id) {
//   dispatch(POST_APPT({ timeslot, date, meetingType: service.toUpperCase(), user_id }))
// }
