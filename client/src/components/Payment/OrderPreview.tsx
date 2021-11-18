import * as React from "react"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../../store/hooks"
import { Box } from "@mui/material"
import axios from "axios"

const meetingTypeText = (type) => {
  const text = {
    energy: "Guided Energy Work",
    yoga: "Yoga for Embodiment and Transformation",
    consult: "Consult",
  }
  switch (type) {
    case "YOGA":
      return text.yoga
    case "ENERGY":
      return text.energy
    case "CONSULT":
      return text.consult
  }
}

export const OrderPreview = (props) => {
  const order = useSelector((state) => state.form)
  return (
    <div>
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          <ListItem key={order.meetingType} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={meetingTypeText(order.meetingType)}
              secondary={order.date}
            />
            <Typography variant="body2">{"price"}</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              $34.06
            </Typography>
          </ListItem>
        </List>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => {
              console.log("use redirect")
            }}
            sx={{ mt: 3, ml: 1 }}
          >
            "Back"
          </Button>
          <Button
            onClick={() => {
              axios.post("http://localhost:3000/create-checkout-session", { order })
            }}
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
          >
            "Place order"
          </Button>
        </Box>
      </React.Fragment>
    </div>
  )
}
