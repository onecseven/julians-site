import { createAction, createSlice } from "@reduxjs/toolkit"
import { navigate } from "@reach/router"

/**
 * TODO: handle errors
 */

export const POST_CREATE_USER =
  createAction<{ email: string; password: string; name: string }>(
    "user/POST_CREATE_USER"
  )

export const CREATE_USER_SUCCESS = createAction<{
  email: string
  pwd: string
  user_id: number
}>("user/CREATE_USER_SUCCESS")

export const DUPLICATE_EMAIL = createAction<{}>("user/DUPLICATE_EMAIL")

export const CREATE_USER_FAILURE = createAction<{ error: string }>(
  "user/CREATE_USER_FAILURE"
)

type initialUserState = {}

const initialState: initialUserState = {}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    POST_CREATE_USER: (state, action) => {},
    CREATE_USER_SUCCESS: (state, action) => {
      console.log("create user success")
      console.dir(action.payload)
      navigate("/")

    },
    CREATE_USER_FAILURE: (state, action) => {
      console.log()
      console.log("create user failure")
      navigate("register/error")
    },
    DUPLICATE_EMAIL: (state,action) => {
      /**FIGURE OUT HOW TO SEND TO snackbar, maybe from the logic */
    }
  },
})

export default userSlice.reducer
