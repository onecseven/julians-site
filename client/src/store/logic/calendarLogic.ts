import { createLogic } from "redux-logic"
import axios from "axios"
import { FakeRootState, RootState } from "../store"
import { POST_DATE } from "../slices/calendarSlice"

export const POST_DATE_LOGIC = createLogic<
  FakeRootState,
  ReturnType<typeof POST_DATE>["payload"]
>({
  type: "POST_DATE", // Respond to actions of this type
  latest: true, // Only provide the latest response if fired many times
  processOptions: {
    dispatchReturn: true, // Automatically dispatch the actions below from the resolved/rejected promise
    successType: "GOT_DATE", // If promise resolved, dispatch this action
    failType: "ERROR_DATE", // If promise rejected, dispatch this action
  },
  // Declare our promise inside a process
  process({ action }) {
    console.log("started process with action type: " + action.type)
    console.log("started process with action payload: " + action.payload)
    let { date } = action.payload
    return axios
      .post("/appointments/ondate", {
        date,
      })
      .then(({ data }) => data.timeslots)
      .catch((err) => err)
  },
})
