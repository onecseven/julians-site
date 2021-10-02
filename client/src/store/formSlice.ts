import { createSlice } from "@reduxjs/toolkit"

type initialFormState = {
  firstName: string
  lastName: string
  date: Date
  meetingType: "YOGA" | "ENERGY"
  email: String
  timeslot: 1 | 2 | 3 | 4 | 5 | 6
}

let initialState: initialFormState = {
  firstName: "",
  lastName: "",
  date: null,
  meetingType: null,
  email: "",
  timeslot: null
}

export const formSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      let firstName = action.payload
      state.firstName = firstName
    },
    setLastName: (state, action) => {
      let lastName = action.payload
      state.lastName = lastName
    },
    setDate: (state, action) => {
      let date = action.payload
      state.date = date
    },
    setTimeslot: (state, action) => {
      let date = action.payload
      state.timeslot = date
    },
    setMeetingType: (state, action) => {
      let meetingType = action.payload
      state.meetingType = meetingType
    },
    clearUI: (state, action) => {
      state = initialState
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
  },
})

export const {
  clearUI,
  setFirstName,
  setLastName,
  setEmail,
  setDate,
  setMeetingType,
  setTimeslot
} = formSlice.actions

export default formSlice.reducer
