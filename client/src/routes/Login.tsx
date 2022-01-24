import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Stack,
  Alert,
  AlertTitle,
  Box,
  InputAdornment,
} from "@mui/material"
import { Email, Lock } from "@mui/icons-material"
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
    <>
      <form
        className="loginForm"
        onSubmit={(event) => {
          event.preventDefault()
          dispatch(POST_LOGIN({ email, password: pwd }))
        }}
      >
        <Stack spacing={2}>
          <h1> Log in with email </h1>
          {alert}
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(event) => {
              let newText = event.target.value
              setEmail(newText)
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email
                    fontSize="large"
                    sx={{ color: "action.active", mr: 1, my: 2 }}
                  />{" "}
                </InputAdornment>
              ),
            }}
            variant="filled"
            sx={{
              backgroundColor: "rgba(254,252,224, 0.65)",
            }}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            value={pwd}
            onChange={(event) => {
              let newText = event.target.value
              setPwd(newText)
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock
                    fontSize="large"
                    sx={{ color: "action.active", mr: 1, my: 2 }}
                  />{" "}
                </InputAdornment>
              ),
            }}
            variant="filled"
            sx={{
              backgroundColor: "rgba(254,252,224, 0.65)",
            }}
          />
          <FormControlLabel control={<Checkbox />} label="Keep Me Logged In" />
          <Button
            size="large"
            variant="contained"
            type="submit"
            color="primary"
            id="form_button"
          >
            Log in
          </Button>
        </Stack>
      </form>
    </>
  )
}
