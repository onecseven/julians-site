import { makeStyles } from "@mui/material/styles"
  import { Button, Divider } from "@mui/material"
import { LoggedInServices } from "../components/Book/LoggedInServices"

import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../store/hooks"

import React from "react"
import { Consult } from "../components/Book/Consult"

export const Services = (props) => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  if (isLoggedIn) return <LoggedInServices/>
  else return <Consult/>
}
