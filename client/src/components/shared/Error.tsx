import { Alert, AlertTitle } from "@mui/material"
import React from "react"
import { Link } from "@reach/router"


export const ErrorPage = (props) => {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        There's been an error!
      </Alert>
      <Link to="/">Go back.</Link>
    </div>
  )
}
