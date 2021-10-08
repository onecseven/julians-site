import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { POST_CREATE_USER } from "../store/features/user/userSlice"

const label = { inputProps: { "aria-label": "Keep Logged In" } }


export const Register = (props) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [pwd, setPwd] = useState("")
  const [pwd2, setPwd2] = useState("")
  let error = pwd !== pwd2

  const dispatch = useDispatch()
  return (
    <div>
      <form
        className="loginForm"
        onSubmit={(event) => {
          event.preventDefault()
          dispatch(POST_CREATE_USER({ email, password: pwd, name }))
        }}
      >
        <TextField
          id="name"
          label="name"
          value={name}
          onChange={(event) => {
            let newText = event.target.value
            setName(newText)
          }}
          variant="filled"
        />
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
          error={error}
          variant="filled"
        />
        <TextField
          id="password2"
          type="password"
          label="Password"
          value={pwd2}
          onChange={(event) => {
            let newText = event.target.value
            setPwd2(newText)
          }}
          error={error}
          variant="filled"
        />
        <Button
          size="large"
          variant="outlined"
          type="submit"
          color="primary"
          id="form_button"
        >
          Register
        </Button>
      </form>
    </div>
  )
}
