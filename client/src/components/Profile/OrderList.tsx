import { Alert, AlertTitle } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../../store/hooks"
import Loading from "../shared/Loading"
import { OrderListMember } from "./OrderListMember"

export const OrderList = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [isError, setIsError] = useState(false)
  const user_id = useSelector((state) => state.login.user_id)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(`http://localhost:3000/appointments/${user_id}`)
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <>
      {isError && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Couldn't Load Orders.
        </Alert>
      )}

      {isLoading ? (
        <Loading></Loading>
      ) : (
        <ul>
          {data.map((item) => {
            console.log(item)
            return (
              <li>
                <OrderListMember
                  order_id={item.order_id}
                  date={item.date}
                  timeslot={item.timeslot}
                  meeting_type={item.meeting_type}
                  order_status={item.order_status ? item.order_status : ""}
                />
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}
