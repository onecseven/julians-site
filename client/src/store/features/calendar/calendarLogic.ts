import { createLogic } from "redux-logic"
import axios from "axios"
import { FakeRootState } from "../../store"
import { POST_DATE, ERROR_DATE, GOT_DATE } from "./calendarActions"
import { navigate } from "@reach/router"

export const POST_DATE_LOGIC = createLogic<
  FakeRootState,
  ReturnType<typeof POST_DATE>["payload"]
>({
  type: "calendar/POST_DATE", // Respond to actions of this type
  latest: true, // Only provide the latest response if fired many times
  processOptions: {
    dispatchMultiple: true,
  },
  validate({ getState, action }, allow, reject) {
    const regex = /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/g
    let { date } = action.payload
    if (date.match(regex)) {
      allow(action)
    } else {
      reject({ type: "calendar/ERROR_DATE" }, { useDispatch: true })
    }
  },
  // Declare our promise inside a process
  process({ action }, dispatch) {
    let { date } = action.payload
    return axios
      .post("http://localhost:3000/appointments/ondate", {
        date,
      })
      .then(({ data }) =>
        dispatch(
          GOT_DATE({
            timeslots: data.timeslots,
          })
        )
      )
      .catch((err) => {
        dispatch(ERROR_DATE())
        navigate("error")
      })
  },
})
