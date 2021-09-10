import React, { useState } from "react"
import { TextInput } from "../shared/InputBox"

export const EmailField = (props) => {
  const [value, setValue] = useState("")

  return (
    <TextInput
    onChange={(newVal) => setValue(newVal)}
    placeholder="What's your email?"
    value={value}
    />
  )
}
// TODO
// 1. CREATE INPUT FIELD
// 2. USE HOOKS TO MANAGE IT
// 3. CONNECT IT TO REDUX
