import { Button, ButtonGroup } from "@material-ui/core"
import React from "react"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../../store/hooks"

const timeslotKey = {
  1: "2:00pm CLT",
  2: "2:30pm CLT",
  3: "3:00pm CLT",
  4: "3:30pm CLT",
  5: "4:00pm CLT",
  6: "4:30pm CLT",
}

export const TimeslotTest = () => {
  const key = [1, 2, 3, 4, 5, 6]
  const { timeslots, error } = useSelector((state) => state.calendar)

  if (!Array.isArray(timeslots)) return null
  return (
    <div className={"deckbox"}>
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
        {key.map((num, index) => {
          return (
            <Button disabled={timeslots.includes(index)}>
              {timeslotKey[num]}
            </Button>
          )
        })}
      </ButtonGroup>
    </div>
  )
}
