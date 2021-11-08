import { createSlice } from "@reduxjs/toolkit"

type initialFormState = {
  date: string
  meetingType: "YOGA" | "ENERGY" | "CONSULT"
  timeslot: 1 | 2 | 3 | 4 | 5 | 6
}

interface realForm extends initialFormState {
  success: {
    date: string
    meetingType: "YOGA" | "ENERGY" | "CONSULT"
    timeslot: 1 | 2 | 3 | 4 | 5 | 6
    order_id: number
  }
}

let initialState: realForm = {
  date: null,
  meetingType: null,
  timeslot: null,
  success: {
    date: null,
    meetingType: null,
    timeslot: null,
    order_id: null,
  },
}

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setDate: (state, action) => {
      let { date } = action.payload
      state.date = date
    },
    setTimeslot: (state, action) => {
      let { timeslot } = action.payload
      state.timeslot = timeslot
    },
    setMeetingType: (state, action) => {
      let { meetingType } = action.payload
      state.meetingType = meetingType
    },
    APPT_SUCCESS: (state, action) => {
      let order = action.payload
      state.date = null
      state.timeslot = null
      state.meetingType = null
      state.success = order
    },
    APPT_FAILURE: () => {},
  },
})

export const { setDate, setMeetingType, setTimeslot } = formSlice.actions

export default formSlice.reducer
