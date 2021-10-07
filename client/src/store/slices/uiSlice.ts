import { createAction, createSlice } from "@reduxjs/toolkit"
import { navigate } from "@reach/router"

export const STEPPER_STATUS =
  createAction<{ status: number }>("ui/STEPPER_STATUS")

type initialUiState = {
  stepper: number
}

const initialState: initialUiState = {
  stepper: 0,
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    STEPPER_STATUS: (state, action) => {
      state.stepper = action.payload
    },
  },
})

export default uiSlice.reducer
