import { createLogic } from "redux-logic"
import axios from "axios"
import { FakeRootState,  } from "../../store"
import { POST_DATE } from "./calendarActions"

export const POST_DATE_LOGIC = createLogic<
  FakeRootState,
  ReturnType<typeof POST_DATE>["payload"]
>({
  type: "calendar/POST_DATE", // Respond to actions of this type
  latest: true, // Only provide the latest response if fired many times
  processOptions: {
    dispatchReturn: true, // Automatically dispatch the actions below from the resolved/rejected promise
    successType: "calendar/GOT_DATE", // If promise resolved, dispatch this action
    failType: "calendar/ERROR_DATE", // If promise rejected, dispatch this action
  },
  validate({ getState, action }, allow, reject) {
    const regex = /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/g
    let { date } = action.payload
    console.log("pre match")
    if (date.match(regex)) {
      console.log("post match")
      allow(action)
    } else {
      console.log("post rejects")
      reject({ type: "calendar/ERROR_DATE" }, { useDispatch: true })
    }
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
      .then(({ data }) => ({
        timeslots: data.timeslots,
      }))
      .catch((err) => err)
  },
})
