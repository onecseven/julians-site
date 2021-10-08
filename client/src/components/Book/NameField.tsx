import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import { useDispatch } from "react-redux"
import { setFirstName } from "../../store/features/form/formSlice"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "100%",
  },
}))

export const NameField = (props) => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()

  const classes = useStyles()

  return (
    <TextField
      id="filled-name"
      className={classes.root}
      label="Name"
      value={value}
      onChange={(event) => {
        let newText = event.target.value
        setValue(newText)
        dispatch(setFirstName(newText))
      }}
      variant="filled"
    />
  )
}