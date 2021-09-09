import React from "react"
import { BookingInfo } from "../components/Book/BookingInfo"
import { OptionsDisplay } from "../components/Book/OptionsDisplay"

export const Book = (props) => {
  return (
    <div className="book-container">
      <div className="options-display">
        <OptionsDisplay />  
      </div>
      <div className="booking-info">
        <BookingInfo />
      </div>
    </div>
  )
}
