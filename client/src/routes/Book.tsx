import React from "react"
import { useDispatch } from "react-redux"
import { CalendarField } from "../components/Book/CalendarField"
import { EmailField } from "../components/Book/EmailField"
import { NameField } from "../components/Book/NameField"
import { setMeetingType } from "../store/formSlice"

export const Book = (props) => {
  let { service } = props
  const dispatch = useDispatch()
  dispatch(setMeetingType(service.toUpperCase()))
  return (
    <>
      <NameField />
      <EmailField />
      <CalendarField />
    </>
  )
}
