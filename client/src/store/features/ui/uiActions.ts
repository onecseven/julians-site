import { createAction } from "@reduxjs/toolkit"

declare type snackbarStatus = "success" | "info" | "warning" | "error"

export const RESET_SNACKBAR = createAction("ui/RESET_SNACKBAR")
export const ERROR_APPT = createAction("ui/SERROR_APPT")

export const SEND_NOTIF =
  createAction<{ error?: snackbarStatus; message: string }>("ui/SEND_NOTIF")
