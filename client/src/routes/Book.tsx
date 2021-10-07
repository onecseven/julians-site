import React from "react"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../store/hooks"
import { CalendarField } from "../components/Book/CalendarField"
import { setMeetingType } from "../store/slices/formSlice"
import { TimeslotTest } from "../components/Test/TimeslotTest"
import { Button } from "@material-ui/core"

//TODO IMPLEMENT ERROR
//TODO Give title more room
//TODO Button stuck to bottom of the papier

const text = {
  energy: "Guided Energy Work",
  yoga: "Yoga for Embodiment and Transformation",
}

export const Book = (props) => {
  let { service } = props
  const dispatch = useDispatch()
  dispatch(setMeetingType(service.toUpperCase()))
  // if (error) ?
  return (
    <>
      <h2>Booking {text[service]}</h2>
      <CalendarField />
      <TimeslotTest />
      <Button
        size="large"
        variant="outlined"
        type="submit"
        color="primary"
        id="form_button"
      >
        Book!
      </Button>
    </>
  )
}
