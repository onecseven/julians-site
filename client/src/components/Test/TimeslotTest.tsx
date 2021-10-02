import { Button, ButtonGroup } from "@material-ui/core"
import React from "react"

const timeslotKey = {
  1: "2:00pm CLT",
  2: "2:30pm CLT",
  3: "3:00pm CLT",
  4: "3:30pm CLT",
  5: "4:00pm CLT",
  6: "4:30pm CLT"
}

const isIn = (num, array) => {

} 

export const TimeslotTest = ({ timeslot }: { timeslot: number[] }) => {
  const key = [1,2,3,4,5,6]
  return (
    <div className={"deckbox"}>
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
        {key.map((num, index) => {
              return (<Button disabled={timeslot.includes(index)}>{timeslotKey[num]}</Button>)
        })}
      </ButtonGroup>
    </div>
  )
}
