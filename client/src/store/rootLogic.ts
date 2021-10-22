import { POST_DATE_LOGIC } from "./features/calendar/calendarLogic"
import { POST_APPT_LOGIC } from "./features/form/formLogic"
import { POST_LOGIN_LOGIC } from "./features/login/loginLogic"
import { POST_REGISTER_LOGIC } from "./features/user/userLogic"

export const logic = [
  POST_DATE_LOGIC,
  POST_REGISTER_LOGIC,
  POST_LOGIN_LOGIC,
  POST_APPT_LOGIC,
]
