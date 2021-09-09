import { createSlice } from "@reduxjs/toolkit"

type initialFormState = {
  firstName: string
  lastName: string
  date: Date
  meetingType: "YOGA" | "ENERGY"
  email: String
}

let initialState: initialFormState = {
  firstName: "",
  lastName: "",
  date: null,
  meetingType: null,
  email: "",
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
} = formSlice.actions

export default formSlice.reducer
