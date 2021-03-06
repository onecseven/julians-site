import { createSlice } from "@reduxjs/toolkit"

type initialLoginState = {
  email: string
  password: string
  user_id: number
  name: string
  error: string
  isLoggedIn: boolean
  approved: boolean
}

const initialState: initialLoginState = {
  email: "",
  password: "",
  user_id: null,
  name: "",
  error: "",
  isLoggedIn: false,
  approved: false,
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    LOGIN_FAILURE: (state, action) => {
      state.error = action.payload.error
    },
    LOGIN_SUCCESS: (state, action) => {
      let { email, user_id, name, approved } = action.payload
      state.email = action.payload.email
      state.user_id = action.payload.user_id
      state.name = action.payload.name
      state.isLoggedIn = true
      state.approved = action.payload.approved
    },
  },
})

export const { LOGIN_FAILURE, LOGIN_SUCCESS } = loginSlice.actions

export default loginSlice.reducer
