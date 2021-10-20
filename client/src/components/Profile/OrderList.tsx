import axios from "axios"
import React, { useEffect, useState } from "react"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../../store/hooks"

export const OrderList = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({ hits: [] })
  const [isError, setIsError] = useState(false)
  const user_id = useSelector((state) => state.login.user_id)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(`/appointments/${user_id}`)

        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  return <div></div>
}
