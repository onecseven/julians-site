import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Chip, Divider, Grid, Typography } from "@material-ui/core"
import {
  navigate
} from "@reach/router"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 480,
    backgroundColor: "#f3f1d1",
  },
  chip: {
    margin: theme.spacing(0.5),
    fontSize: "medium",
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}))

type optionProps = {
  name: string
  description: string
  duration: number[]
}

export const Option = ({ name, description, duration }: optionProps) => {
  // return (
  //   <div className="option-member">
  //     <h2>{name}</h2>
  //     <p>{description} </p>
  //     <ul>
  //       {duration.map(minutes => (<li>{minutes}</li>))}
  //     </ul>
  //   </div>
  // )
  const [selected, setSelected] = useState(0)
  
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
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
      <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
          Select length
        </Typography>
        <div>
          {duration.map((time, index) => {
            return (<Chip className={classes.chip} 
              label={time + " minutes"} clickable color={index === selected ? "primary" : "default"}
              onClick={() => {
                setSelected(index)
              }} />)
          })}
        </div>
      </div>
          
    </div>
  )
}
