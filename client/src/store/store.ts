import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import formSlice from './formSlice'

export const store = configureStore({
  reducer: {
    form: formSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
