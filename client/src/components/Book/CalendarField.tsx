import React, { useState } from "react"
import Calendar from "react-calendar-mobile"
import { useDispatch } from "react-redux"
import { setDate } from "../../store/slices/formSlice"

export const CalendarField = (props) => {
  const dispatch = useDispatch()
  return (
    <div className="calendar">
      <Calendar
        onSelectDate={(newDate) => {
          dispatch(setDate(newDate))
        }}
      />
    </div>
  )
}
// TODO
// 1. CONNECT IT TO REDUX
