import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Stack,
  Alert,
  AlertTitle,
  Box,
} from "@mui/material"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { POST_LOGIN } from "../store/features/login/loginActions"

export const Login = (props) => {
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const dispatch = useDispatch()
  let error = props["*"]
  let alert =
    error === "error" ? (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        There has been an issue logging in. Please try again.
      </Alert>
    ) : null
  return (
    <div>
      <form
        className="loginForm"
        onSubmit={(event) => {
          event.preventDefault()
          dispatch(POST_LOGIN({ email, password: pwd }))
        }}
      >
        <Box>
          <Stack spacing={2}>
            {alert}
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
            <FormControlLabel
              control={<Checkbox />}
              label="Keep Me Logged In"
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
          </Stack>
        </Box>
      </form>
    </div>
  )
}
