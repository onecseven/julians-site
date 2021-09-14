import React from "react"
import { CalendarField } from "../components/Book/CalendarField"
import { EmailField } from "../components/Book/EmailField"
import { NameField } from "../components/Book/NameField"
import { OptionsField } from "../components/Book/OptionsField"

export const BookForm = (props) => {
  return (
      <div className="options-display">
        <OptionsField/> 
        <NameField/>
        <EmailField/>
        <CalendarField/> 
      </div>
  )
}
