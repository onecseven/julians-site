import React from "react"
import { CalendarField } from "../components/Book/CalendarField"
import { EmailField } from "../components/Book/EmailField"
import { NameField } from "../components/Book/NameField"

export const Book = (props) => {
  let { service } = props
  return (
    <>
      <NameField />
      <EmailField />
      <CalendarField />
    </>
  )
}
