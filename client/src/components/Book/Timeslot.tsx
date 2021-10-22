import { Button, ButtonGroup } from "@mui/material"
import React, { useState } from "react"
import { setTimeslot } from "../../store/features/form/formSlice"
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
const key = [1, 2, 3, 4, 5, 6]

export const Timeslot = () => {
  const { timeslots, error } = useSelector((state) => state.calendar)
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(0)
  if (!Array.isArray(timeslots)) return null

  const handleChange = (event, num) => {
    event.preventDefault()
    setSelected(num)
    dispatch(setTimeslot({ timeslot: num }))
  }
  return (
    <div className={"deckbox"}>
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
        {key.map((num, index) => {
          return (
            <Button
              variant={selected === num ? "contained" : "outlined"}
              disabled={timeslots.includes(index)}
              onClick={(event) => handleChange(event, num)}
            >
              {timeslotKey[num]}
            </Button>
          )
        })}
      </ButtonGroup>
    </div>
  )
}
