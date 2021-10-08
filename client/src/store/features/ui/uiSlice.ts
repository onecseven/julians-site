import { createSlice } from "@reduxjs/toolkit"
import { navigate } from "@reach/router"

//TODO snackbar state!

type initialUiState = {}

const initialState: initialUiState = {}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
})

export default uiSlice.reducer
