import React from "react"
import { Greeting } from "../components/Profile/Greeting"
import { OrderDataTable } from "../components/Profile/OrderDataTable"
import { ErrorPage } from "../components/shared/Error"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../store/hooks"

export const Profile = (props) => {
  /**
   * 1. check if we're logged in
   * 2. if we're logged in, render a greeteing and try to load OrderList
   * 3.
   */
  const { isLoggedIn, name } = useSelector((state) => state.login)
  if (!isLoggedIn) return <ErrorPage />
  return (
    <>
      <Greeting name={name} />
      <OrderDataTable />
    </>
  )
}
/**
 * profile info
 * orderlist
 */
