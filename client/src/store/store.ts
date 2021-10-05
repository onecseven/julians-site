import {
  configureStore,
  getDefaultMiddleware,
  MiddlewareArray,
} from "@reduxjs/toolkit"
import formSlice from "./slices/formSlice"
import { createLogicMiddleware } from "redux-logic"
import { POST_LOGIN_LOGIC } from "./logic/loginLogic"
import axios from "axios"
import calendarSlice from "./slices/calendarSlice"
import userSlice from "./slices/userSlice"

const deps = {
  httpClient: axios,
}

const logicMiddleware = createLogicMiddleware([POST_LOGIN_LOGIC], deps)

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
  },
  middleware: middleware,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type FakeRootState = ReturnType<typeof fakeStore.getState>
