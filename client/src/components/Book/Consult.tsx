import React from "react"
import { Option } from "./Option"

export const Consult = (props) => {
  return (
    <>
      <Option
        name="Free Consult"
        description=""
        duration={[15]}
        route="/book/consult"
      />
    </>
  )
}
