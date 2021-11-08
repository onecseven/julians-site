import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import axios from "axios"
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../../store/hooks"
import { Alert, AlertTitle } from "@mui/material"
import Loading from "../shared/Loading"

function createData(
  order_id: number,
  date: string,
  timeslot: number,
  meeting_type: "YOGA" | "ENERGY" | "CONSULT",
  order_status: "AWAITING_APPROVAL" | "UPCOMING" | "COMPLETED" | "CANCELED"
) {
  return { order_id, date, timeslot, meeting_type, order_status }
}

export const OrderDataTable = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const user_id = useSelector((state) => state.login.user_id)

  React.useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(
          `http://localhost:3000/appointments/${user_id}`
        )
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <>
      {isError && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Couldn't Load Orders.
        </Alert>
      )}

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Timeslot</TableCell>
              <TableCell align="right">Meeting Type</TableCell>
              <TableCell align="right">Order Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <Loading></Loading>
            ) : (
              data.map((row) => {
                return (
                  <TableRow
                    key={row.order_id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {"#" + row.order_id}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.timeslot}</TableCell>
                    <TableCell align="right">{row.meeting_type}</TableCell>
                    <TableCell align="right">{row.order_status}</TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
