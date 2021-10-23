import { createSlice } from "@reduxjs/toolkit"

type initialFormState = {
  date: string
  meetingType: "YOGA" | "ENERGY"
  timeslot: 1 | 2 | 3 | 4 | 5 | 6
}

let initialState: initialFormState = {
  date: null,
  meetingType: null,
  timeslot: null,
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
    APPT_SUCCESS: () => {
    },
    APPT_FAILURE: () => {
    }
  },
})

export const { setDate, setMeetingType, setTimeslot } =
  formSlice.actions

export default formSlice.reducer
