import { createLogic } from "redux-logic"
import axios from "axios"
import { POST_LOGIN } from "../slices/loginSlice"
import { FakeRootState, RootState } from "../store"

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
  // Declare our promise inside a process
  process({ action }) {
    console.log("started process with action type: " + action.type)
    console.log("started process with action payload: " + action.payload)
    let { email, password } = action.payload

    return axios
      .post("/user/login", {
        email,
        password,
      })
      .then(({ data }) => ({
        email: data.email,
        name: data.name,
        user_id: data.user_id,
      }))
      .catch((err) => err)
  },
})
