import { makeStyles, TextField } from "@material-ui/core"
import React, { useState } from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));


export const EmailField = (props) => {
  const [value, setValue] = useState("")
  const classes = useStyles()
  
  return (
    <TextField
    id="filled-email"
    label="Email"
    value={value}
    onChange={(event) => setValue(event.target.value)}
    variant="filled"
  />
  )
}
// TODO
// 1. CREATE INPUT FIELD
// 2. USE HOOKS TO MANAGE IT
// 3. CONNECT IT TO REDUX
