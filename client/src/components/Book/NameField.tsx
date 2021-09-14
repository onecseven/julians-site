import React, {useState} from "react"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(1),
      width: '100%',
    },
}));

export const NameField = (props) => {
  const [value, setValue] = useState("")
  const classes = useStyles()


  return (
    <TextField
    id="filled-name"
    className={classes.root}
    label="Name"
    value={value}
    onChange={(event) => setValue(event.target.value)}
    variant="filled"
  />
  )
}
// TODO
// 1. CREATE INPUT FIELD
// 2. USE HOOKS TO MANAGE IT
// 3. CONNECT IT TO REDUX