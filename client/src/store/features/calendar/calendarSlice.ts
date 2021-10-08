import { createSlice } from "@reduxjs/toolkit"

type initialState = {
  timeslots: number[]
  error: boolean
}

const initialState: initialState = {
  timeslots: null,
  error: false,
}

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    POST_DATE: (state, action) => {},
    GOT_DATE: (state, action) => {
      console.log("here?")
      let { timeslots } = action.payload
      state.timeslots = timeslots
    },
    ERROR_DATE: (state, action) => {
      let { error } = action.payload
      state.error = error
    },
    CLEAR_TIMESLOTS: (state, action) => {
      state.timeslots = null
    },
  },
})

export default calendarSlice.reducer
