import {
  configureStore,
  getDefaultMiddleware,
  MiddlewareArray,
} from "@reduxjs/toolkit"
import formSlice from "./features/form/formSlice"
import { createLogicMiddleware } from "redux-logic"
import axios from "axios"
import calendarSlice from "./features/calendar/calendarSlice"
import userSlice from "./features/user/userSlice"
import { logic } from "./rootLogic"
import loginSlice from "./features/login/loginSlice"
import uiSlice from "./features/ui/uiSlice"

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
    login: loginSlice,
    ui: uiSlice,
  },
})

export const store = configureStore({
  reducer: {
    form: formSlice,
    calendar: calendarSlice,
    user: userSlice,
    login: loginSlice,
    ui: uiSlice,
  },
  middleware: middleware,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type FakeRootState = ReturnType<typeof fakeStore.getState>
