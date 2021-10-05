import { createAction, createSlice } from "@reduxjs/toolkit"

// TODO fill this in

export const POST_CREATE_USER =
  createAction<{ email: string; password: string }>("POST_LOGIN")

export const CREATE_USER_FAILURE =
  createAction<{ error: string }>("LOGIN_FAILURE")

export const CREATE_USER_SUCCESS =
  createAction<{ email: string; pwd: string; user_id: number }>("LOGIN_SUCCESS")

type initialLoginState = {
}

const initialState: initialLoginState = {
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    POST_CREATE_USER: (state, action) => {},
    CREATE_USER_SUCCESS: (state, action) => {},
    CREATE_USER_FAILURE: (state, action) => {},
  },
})

export default userSlice.reducer
