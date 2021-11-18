import React, { useState } from "react"
import { Button, Chip, Divider, Grid, Typography } from "@mui/material"
import { navigate } from "@reach/router"
import { setMeetingType } from "../../store/features/form/formSlice"
import { useAppDispatch as useDispatch } from "../../store/hooks"

type optionProps = {
  name: string
  description: string
  duration: number[]
  route: string
}

export const Option = ({ name, description, duration, route }: optionProps) => {
  const [selected, setSelected] = useState(0)
  const dispatch = useDispatch()
  const handleBook = () => {
    dispatch(setMeetingType(route.split("/").reverse()[0].toUpperCase())) // im so lazy
    navigate(route)
  }

  return (
    <div>
      <div>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h2">
              {name}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body1">
          {description}
        </Typography>
      </div>
      <Divider variant="middle" />
      <div>
        <Typography gutterBottom variant="body1">
          Select length
        </Typography>
        <div>
          {duration.map((time, index) => {
            return (
              <Chip
                label={time + " minutes"}
                clickable
                color={index === selected ? "primary" : "default"}
                onClick={() => {
                  setSelected(index)
                }}
              />
            )
          })}
        </div>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleBook}
        >
          Book
        </Button>
      </div>
    </div>
  )
}
