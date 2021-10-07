import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { POST_LOGIN } from "../store/slices/loginSlice"

export const Login = (props) => {
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const dispatch = useDispatch()

  return (
    <div>
      <form
        className="loginForm"
        onSubmit={(event) => {
          event.preventDefault()
          dispatch(POST_LOGIN({ email, password: pwd }))
        }}
      >
        <TextField
          id="email"
          label="Email"
          value={email}
          onChange={(event) => {
            let newText = event.target.value
            setEmail(newText)
          }}
          variant="filled"
        />
        <div className="br" />
        <TextField
          id="password"
          type="password"
          label="Password"
          value={pwd}
          onChange={(event) => {
            let newText = event.target.value
            setPwd(newText)
          }}
          variant="filled"
        />
        <FormControlLabel control={<Checkbox />} label="Keep Me Logged In" />
        <Button
          size="large"
          variant="outlined"
          type="submit"
          color="primary"
          id="form_button"
        >
          Log in
        </Button>
      </form>
    </div>
  )
}
