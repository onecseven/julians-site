import React from "react"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../../store/hooks"


export const Receipt = (props) => {
  const order = useSelector((state) => state.form.success)
  return (
    <div>
      Congrats, you have ordered:
      {JSON.stringify(order, null, 2)}
    </div>
  )
}
