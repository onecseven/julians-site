import React from "react"
import Calendar from "react-calendar-mobile"
import { useDispatch } from "react-redux"
import { CLEAR_TIMESLOTS, POST_DATE } from "../../store/slices/calendarSlice"
import { dateConverter } from "../shared/dateConverter"

export const CalendarField = (props) => {
  const dispatch = useDispatch()
  return (
    <div className="calendar">
      <Calendar
        onSelectDate={(newDate) => {
          dispatch(CLEAR_TIMESLOTS())
          dispatch(POST_DATE({ date: dateConverter(newDate) }))
        }}
      />
    </div>
  )
}