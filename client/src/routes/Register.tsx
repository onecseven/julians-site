import { Button, Checkbox, FormControlLabel, TextField } from "@material-ui/core"
import React, { useState } from "react"
import { useDispatch } from "react-redux"

const label = { inputProps: { "aria-label": "Keep Logged In" } }

/**
 * TODO: Confirm Password 
 * TODO: Make it into a square rather than Just a colum.
 */

export const Register = (props) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [pwd, setPwd] = useState("")
  const dispatch = useDispatch()

  return (
    <div>
      <form
        className="loginForm"
        onSubmit={(event) => {
          event.preventDefault()
          dispatch(({ email, password: pwd }))
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
          variant="filled"
        />
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
