import React, { useState } from "react"
import Calendar from "react-calendar-mobile"

export const CalendarField = (props) => {

  return (
    <div className="calendar">
      <Calendar onSelectDate={(wtf) => {
        // connect to redux
}}
      />
    </div>
  )
}
// TODO
// 1. CONNECT IT TO REDUX
