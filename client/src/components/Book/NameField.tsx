import { AccountCircle } from "@mui/icons-material"
import { Box, TextField } from "@mui/material"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setFirstName } from "../../store/features/form/formSlice"

export const NameField = (props) => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()

  return (
    <Box>
      <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="With sx" variant="standard" />
      <TextField
        id="filled-name"
        label="Name"
        value={value}
        onChange={(event) => {
          let newText = event.target.value
          setValue(newText)
          dispatch(setFirstName(newText))
        }}
        variant="filled"
      />
    </Box>
  )
}
