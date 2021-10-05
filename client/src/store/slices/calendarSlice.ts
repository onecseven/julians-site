import { createAction, createSlice } from "@reduxjs/toolkit"

export const POST_DATE = createAction<{ date: string }>("POST_DATE")

export const GOT_DATE = createAction<{ timeslots: number[] }>("GOT_DATE")

export const ERROR_DATE = createAction<{ error: string }>("ERROR_DATE")

type initialState = {
  timeslots: number[]
  error: boolean
}

const initialState: initialState = {
  timeslots: [],
  error: false,
}

export const calendarSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    POST_DATE: (state, action) => {

    },
    GOT_DATE: (state, action) => {
      let { timeslots } = action.payload
      state.timeslots = timeslots
    },
    ERROR_DATE: (state, action) => {
      let { error } = action.payload
      state.error = error
    },
  },
})

export default calendarSlice.reducer
