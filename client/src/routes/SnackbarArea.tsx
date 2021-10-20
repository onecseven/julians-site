import * as React from "react"
import { IconButton, Snackbar } from "@mui/material"
import { Close } from "@mui/icons-material"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../store/hooks"
import { RESET_SNACKBAR } from "../store/features/ui/uiActions"

export const SnackbarArea = () => {
  const dispatch = useDispatch()
  const { message, open } = useSelector((state) => state.ui.snackbar)
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    dispatch(RESET_SNACKBAR())
  }

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => handleClose(null, null)}
    >
      <Close fontSize="small" />
    </IconButton>
  )

  if (open) {
    return (
      <div>
        <Snackbar
          open={open ? true : false}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
          action={action}
          ContentProps={{ role: "alert" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        />
      </div>
    )
  } else if (!open) {
    return <h1>not open</h1>
  }
}
