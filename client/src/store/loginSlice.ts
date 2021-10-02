import { createSlice } from "@reduxjs/toolkit"

type initialLoginState = {
  email: String,
  password: String
}

const initialState: initialLoginState = {
  email: '',
  password: ''
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    StartLogin: (state, action) => {
    },
    StartRegistration: (state, action) => {
    }
  },
})

export const {
  StartLogin,
  StartRegistration
} = loginSlice.actions

export default loginSlice.reducer
