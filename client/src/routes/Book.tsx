import React from "react"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../store/hooks"
import { CalendarField } from "../components/Book/CalendarField"
import { EmailField } from "../components/Book/EmailField"
import { NameField } from "../components/Book/NameField"
import { setMeetingType } from "../store/slices/formSlice"
import { TimeslotTest } from "../components/Test/TimeslotTest"

//TODO IMPLEMENT ERROR

export const Book = (props) => {
  let { service } = props
  const { timeslots, error } = useSelector((state) => state.calendar)
  const dispatch = useDispatch()
  dispatch(setMeetingType(service.toUpperCase()))
  // if (error) ?
  return (
    <>
      <NameField />
      <EmailField />
      <CalendarField />
      {(timeslots && timeslots.length > 0) ? <TimeslotTest timeslot={timeslots} /> : null}
    </>
  )
}
