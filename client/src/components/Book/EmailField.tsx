import { makeStyles, TextField } from "@material-ui/core"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setEmail } from "../../store/formSlice"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "100%",
  },
}))

export const EmailField = (props) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const classes = useStyles()

  return (
    <TextField
      id="filled-email"
      label="Email"
      value={value}
      className={classes.root}
      onChange={(event) => {
        let newText = event.target.value
        setValue(newText)
        dispatch(setEmail(newText))
      }}
      variant="filled"
    />
  )
}

// TODO
// 1. CREATE INPUT FIELD
// 2. USE HOOKS TO MANAGE IT
// 3. CONNECT IT TO REDUX
