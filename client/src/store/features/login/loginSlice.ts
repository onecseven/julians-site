import { createSlice } from "@reduxjs/toolkit"

type initialLoginState = {
  email: string
  password: string
  user_id: number
  name: string
  error: string
}

const initialState: initialLoginState = {
  email: "",
  password: "",
  user_id: null,
  name: "",
  error: "",
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    LOGIN_FAILURE: (state, action) => {
      state.error = action.payload.error
    },
    LOGIN_SUCCESS: (state, action) => {
      state.email = action.payload.email
      state.user_id = action.payload.user_id
      state.name = action.payload.name
    },
  },
})

export default loginSlice.reducer
