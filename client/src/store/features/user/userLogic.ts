import { createLogic } from "redux-logic"
import axios from "axios"
import { FakeRootState, RootState } from "../../store"
import {
  POST_CREATE_USER,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
} from "./userSlice"
import { LOGIN_SUCCESS } from "../login/loginActions"
import { navigate } from "@reach/router"

//it's suceeding when there's an error

export const POST_REGISTER_LOGIC = createLogic<
  FakeRootState,
  ReturnType<typeof POST_CREATE_USER>["payload"]
>({
  type: "user/POST_CREATE_USER", // Respond to actions of this type
  latest: true, // Only provide the latest response if fired many times
  processOptions: {
    // successType: "user/CREATE_USER_SUCCESS", // If promise resolved, dispatch this action
    // failType: "user/CREATE_USER_FAILURE", // If promise rejected, dispatch this action
  },
  // Declare our promise inside a process
  process({ action }, dispatch) {
    let { email, password, name } = action.payload

    return axios
      .post("http://localhost:3000/user/create", {
        email,
        password,
        name,
      })
      .then(({ data }) => {
        console.log(data)
        console.log(data.error)
        if (data.error || data.linenumber) {
          dispatch(CREATE_USER_FAILURE(data))
        } else {
          dispatch(CREATE_USER_SUCCESS())
          dispatch(LOGIN_SUCCESS(data))
          navigate("/")
        }
      })
  },
})

// export const CREATE_USER_FAILURE_LOGIC = createLogic<
//   FakeRootState,
//   ReturnType<typeof CREATE_USER_FAILURE>["payload"]
// >({
//   type: "user/CREATE_USER_FAILURE", // Respond to actions of this type
//   latest: true, // Only provide the latest response if fired many times
//   processOptions: {
//     dispatchReturn: true, // Automatically dispatch the actions below from the resolved/rejected promise
//     failType: "user/DUPLICATE_EMAIL", // If promise rejected, dispatch this action
//   },
//   validate({ getState, action }, allow, reject) {
//     let { error } = action.payload
//     switch (error) {
//       case "ER_DUP_ENTRY": {
//       }
//     }
//   },
// })

export const lol = {
  user_id: 13,
  name: "wil wgen",
  email: "lol@lol.com",
  password: "$2b$12$acF619JF2R2Fjx0OCZuMZO1EP39AsBuJpny8yIrH65uWuKu0ApSsu",
}
