import { createAction, createSlice } from "@reduxjs/toolkit"

/**
 * TODO: Respond to Login Failure in UI!
 * TODO: Respond to login success in UI!
 */

export const POST_LOGIN =
  createAction<{ email: string; password: string }>("POST_LOGIN")

export const LOGIN_FAILURE = createAction<{ error: string }>("LOGIN_FAILURE")

export const LOGIN_SUCCESS =
  createAction<{ email: string; pwd: string; user_id: number }>("LOGIN_SUCCESS")

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
