import { createAction } from "@reduxjs/toolkit"

type meetingType = "YOGA" | "ENERGY" | "CONSULT"

export const POST_APPT = createAction<{
  date: string
  user_id: number
  timeslot: number
  meetingType: meetingType
}>("form/POST_APPT")

export const APPT_SUCCESS = createAction<{
  date: string
  timeslot: number
  meetingType: meetingType
  order_id: number
}>("form/APPT_SUCCESS") 
export const APPT_FAILURE = createAction<{}>("form/APPT_FAILURE")
