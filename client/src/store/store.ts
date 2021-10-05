import {
  configureStore,
  getDefaultMiddleware,
  MiddlewareArray,
} from "@reduxjs/toolkit"
import formSlice from "./slices/formSlice"
import { createLogicMiddleware } from "redux-logic"
import axios from "axios"
import calendarSlice from "./slices/calendarSlice"
import userSlice from "./slices/userSlice"
import { logic } from "./logic/rootLogic"

const deps = {
  httpClient: axios,
}
const logicMiddleware = createLogicMiddleware(logic, deps)

const middleware = getDefaultMiddleware().concat(logicMiddleware)

export const fakeStore = configureStore({
  reducer: {
    form: formSlice,
    calendar: calendarSlice,
    user: userSlice,
  },
})

export const store = configureStore({
  reducer: {
    form: formSlice,
    calendar: calendarSlice,
    user: userSlice,
  },
  middleware: middleware,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type FakeRootState = ReturnType<typeof fakeStore.getState>
