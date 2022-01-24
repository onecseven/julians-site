import { AccountCircle, Email, Lock } from "@mui/icons-material"
import {
  Button,
  TextField,
  Stack,
  Alert,
  AlertTitle,
  InputAdornment,
  Input,
} from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { POST_CREATE_USER } from "../store/features/user/userSlice"

// const label = { inputProps: { "aria-label": "Keep Logged In" } }

export const Register = (props) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [pwd, setPwd] = useState("")
  const [pwd2, setPwd2] = useState("")
  const [seeAlert, setAlert] = useState(false)

  let error = pwd !== pwd2
  let alert = (
    <Alert severity="warning" sx={{ width: "90%", ml: 3.5 }}>
      <AlertTitle>Warning</AlertTitle>
      Passwords don't match.
    </Alert>
  )
  const dispatch = useDispatch()
  return (
    <div>
      <Box>{seeAlert ? alert : null}</Box>
      <form
        className="registerForm"
        onSubmit={(event) => {
          if (error) {
            setAlert(true)
            event.preventDefault()
            return
          }
          event.preventDefault()
          dispatch(POST_CREATE_USER({ email, password: pwd, name }))
          setAlert(false)
          return
        }}
      >
        <h1 className="hache1"> Register a new account </h1>
        <div className="name">
          <h3>Name</h3>
          <Input
            margin="dense"
            value={name}
            onChange={(event) => {
              let newText = event.target.value
              setName(newText)
            }}
            sx={{
              backgroundColor: "rgba(254,252,224, 0.65)",
              width: "100%",
              color: "black",
            }}
          />
        </div>
        <div className="email">
          <h3>Email</h3>
          <Input
            id="email"
            margin="dense"
            value={email}
            onChange={(event) => {
              let newText = event.target.value
              setEmail(newText)
            }}
            sx={{
              backgroundColor: "rgba(254,252,224, 0.65)",
              width: "100%",
            }}
          />
        </div>
        <div className="pw">
          <h3>Password</h3>
          <Input
            margin="dense"
            id="password"
            type="password"
            sx={{
              backgroundColor: "rgba(254,252,224, 0.65)",
              width: "100%",
            }}
            value={pwd}
            onChange={(event) => {
              let newText = event.target.value
              setPwd(newText)
            }}
            error={error}
          />
        </div>
        <div className="pw2">
          <h3>Confirm Your Pasword</h3>
          <Input
            id="password2"
            margin="dense"
            type="password"
            value={pwd2}
            onChange={(event) => {
              let newText = event.target.value
              setPwd2(newText)
            }}
            error={error}
            sx={{
              backgroundColor: "rgba(254,252,224, 0.65)",
            }}
          />
        </div>

        <Button
          size="large"
          className="donezo"
          variant="contained"
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
