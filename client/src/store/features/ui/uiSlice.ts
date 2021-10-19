import { createSlice } from "@reduxjs/toolkit"

type snackbarStatus = "success" | "info" | "warning" | "error"

type initialUiState = {
  snackbar: {
    message: string
    error: snackbarStatus
    open: boolean
  }
}

const initialState: initialUiState = {
  snackbar: {
    message: null,
    error: null,
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
  },
})

export default uiSlice.reducer
