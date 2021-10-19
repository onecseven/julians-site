import { createAction } from "@reduxjs/toolkit"

declare type snackbarStatus = "success" | "info" | "warning" | "error"

export const RESET_SNACKBAR = createAction("ui/RESET_SNACKBAR")

export const SEND_NOTIF =
  createAction<{ error?: snackbarStatus, message: string }>("ui/SEND_NOTIF")

