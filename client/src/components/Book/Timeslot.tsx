import { Button, ButtonGroup } from "@mui/material"
import React, { useState } from "react"
import { setTimeslot } from "../../store/features/form/formSlice"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../../store/hooks"
import { timeslotConverter } from "../shared/timeslotConverter"

const timeslotKey = {
  1: "17:00",
  2: "17:30",
  3: "18:00",
  4: "18:30",
  5: "19:00",
  6: "19:30 ",
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
          let date = timeslotConverter(num)
          return (
            <Button
              variant={selected === num ? "contained" : "outlined"}
              disabled={timeslots.includes(index)}
              onClick={(event) => handleChange(event, num)}
            >
              {date.smallTimeString}
            </Button>
          )
        })}
      </ButtonGroup>
    </div>
  )
}
