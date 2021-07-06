import { createSlice } from "@reduxjs/toolkit"



export const Slice = createSlice({
  name: "",
  initialState: {
  },
  reducers: {
    add: (state, action) => {
      return state
        },
    remove: (state, action) => {
      return state
    },
    update: (state, action) => {
      return state
    },
  },
})

// Action creators are generated for each case reducer function
export const { remove, add, update } = Slice.actions

export default Slice.reducer