import { createLogic } from "redux-logic"
import axios from "axios"
import { LOGIN_FAILURE, LOGIN_SUCCESS, POST_LOGIN } from "./loginActions"
import { FakeRootState, RootState } from "../../store"
import { SEND_NOTIF } from "../ui/uiActions"
import { navigate } from "@reach/router"

export const POST_LOGIN_LOGIC = createLogic<
  FakeRootState,
  ReturnType<typeof POST_LOGIN>["payload"]
>({
  type: "login/POST_LOGIN", // Respond to actions of this type
  latest: true, // Only provide the latest response if fired many times
  processOptions: {
    dispatchReturn: true, // Automatically dispatch the actions below from the resolved/rejected promise
    successType: "login/LOGIN_SUCCESS", // If promise resolved, dispatch this action
    failType: "login/LOGIN_FAILURE", // If promise rejected, dispatch this action
  },
  process({ action, getState }, dispatch, done) {
    console.log("started process with action type: " + action.type)
    console.log("started process with action payload: " + action.payload)
    let { email, password } = action.payload

    return axios
      .post("http://localhost:3000/user/login", {
        email,
        password,
      })
      .then(({ data }) => {
        let payload = {
          email: data.email,
          name: data.name,
          user_id: data.user_id,
        }
        dispatch(LOGIN_SUCCESS(payload))
        dispatch(
          SEND_NOTIF({ message: "Login successful! Welcome " + data.name })
        )
        navigate("/")
      })
      .catch((err) => {
        dispatch(LOGIN_FAILURE())
        dispatch(
          SEND_NOTIF({ message: "Error logging in.", error: "error"})
        )
        navigate("/login/error")
      })
  },
})
