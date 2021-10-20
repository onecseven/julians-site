import { AccountCircle, Email, Lock } from "@mui/icons-material"
import { Button, TextField, Stack, Alert, AlertTitle } from "@mui/material"
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
  // let error = pwd !== pwd2
  let error = true
  let alert = (
    <Alert severity="warning" sx={{width: "90%", ml: 3.5}}>
      <AlertTitle>Warning</AlertTitle>
      Passwords don't match.
    </Alert>
  )
  const dispatch = useDispatch()
  return (
    <div>
      <form
        className="loginForm"
        onSubmit={(event) => {
          if (error) {
            setAlert(true)
            event.preventDefault()
            return
          }
          event.preventDefault()
          dispatch(POST_CREATE_USER({ email, password: pwd, name }))
        }}
      >
        <Stack spacing={2.5}>
          <Box>{error ? alert : null}</Box>
          <Box sx={{ display: "inline-flex" }}>
            <AccountCircle
              fontSize="large"
              sx={{ color: "action.active", mr: 1, my: 2 }}
            />
            <TextField
              id="name"
              label="Name"
              value={name}
              onChange={(event) => {
                let newText = event.target.value
                setName(newText)
              }}
              variant="filled"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ display: "inline-flex" }}>
            <Email
              fontSize="large"
              sx={{ color: "action.active", mr: 1, my: 2 }}
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
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ display: "inline-flex" }}>
            <Lock
              fontSize="large"
              sx={{ color: "action.active", mr: 1, my: 2 }}
            />

            <TextField
              id="password"
              type="password"
              label="Password"
              sx={{ width: "100%" }}
              value={pwd}
              onChange={(event) => {
                let newText = event.target.value
                setPwd(newText)
              }}
              error={error}
              variant="filled"
            />
          </Box>
          <Box sx={{ display: "inline-flex" }}>
            <Lock
              fontSize="large"
              sx={{ color: "action.active", mr: 1, my: 2 }}
            />
            <TextField
              id="password2"
              type="password"
              label="Confirm password"
              sx={{ width: "100%" }}
              value={pwd2}
              onChange={(event) => {
                let newText = event.target.value
                setPwd2(newText)
              }}
              error={error}
              variant="filled"
            />
          </Box>
          <Box>
            <Button
              size="large"
              variant="outlined"
              type="submit"
              color="primary"
              id="form_button"
            >
              Register
            </Button>
          </Box>
        </Stack>
      </form>
    </div>
  )
}
