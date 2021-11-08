import { createLogic } from "redux-logic"
import axios from "axios"
import { FakeRootState, RootState } from "../../store"
import { ERROR_APPT, SEND_NOTIF } from "../ui/uiActions"
import { navigate } from "@reach/router"
import { APPT_FAILURE, APPT_SUCCESS, POST_APPT } from "./formActions"

export const POST_APPT_LOGIC = createLogic<
  FakeRootState,
  ReturnType<typeof POST_APPT>["payload"]
>({
  type: "form/POST_APPT", // Respond to actions of this type
  latest: true, // Only provide the latest response if fired many times
  processOptions: {
    dispatchMultiple: true,
  },
  process({ action, getState }, dispatch, done) {
    let { date, timeslot, meetingType, user_id } = action.payload

    return axios
      .post("http://localhost:3000/appointments", {
        date,
        timeslot,
        meetingType,
        user_id,
      })
      .then(({ data }) => {
        dispatch(
          APPT_SUCCESS({ order_id: data.order_id, date, timeslot, meetingType })
        )
        dispatch(SEND_NOTIF({ message: "Booking successful!" }))
        navigate("/confirmation")
      })
      .catch((err) => {
        dispatch(APPT_FAILURE({}))
        dispatch(ERROR_APPT())
        navigate("error")
      })
  },
})
