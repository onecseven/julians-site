import { Alert, AlertTitle } from "@mui/material"
import React from "react"
import { Link } from "@reach/router"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../../store/hooks"

export const ErrorPage = (props) => {
  const error = useSelector((state) => state.ui.error)
  const fallback = "There's been an error!"
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error ? error : fallback}
      </Alert>
      <Link to="/">Go back.</Link>
    </div>
  )
}
