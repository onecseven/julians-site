import { createSlice } from "@reduxjs/toolkit"
import { APPT_FAILURE } from "../form/formActions"

type snackbarStatus = "success" | "info" | "warning" | "error"

type initialUiState = {
  error: string
  snackbar: {
    message: string
    open: boolean
  }
}

const initialState: initialUiState = {
  error: null,
  snackbar: {
    message: null,
    open: false,
  },
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    RESET_SNACKBAR: (state, action) => {
      state.snackbar = initialState.snackbar
    },
    SEND_NOTIF: (state, action) => {
      let { message } = action.payload
      state.snackbar.message = message
      state.snackbar.open = true
    },
    ERROR_DATE: (state, action) => {
      state.error = "There's been an error with the appointments server."
    },
    ERROR_APPT: (state, action) => {
      state.error = "There's been an error with the appointments server."
    }
  },
})

export default uiSlice.reducer
