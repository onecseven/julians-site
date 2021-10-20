import { Box, TextField } from "@mui/material"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { setEmail } from "../../store/features/form/formSlice"
import EmailIcon from "@mui/icons-material/Email"

export const EmailField = (props) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField
        id="filled-email"
        label="Email"
        value={value}
        onChange={(event) => {
          let newText = event.target.value
          setValue(newText)
          dispatch(setEmail(newText))
        }}
        variant="filled"
      />
    </Box>
  )
}
