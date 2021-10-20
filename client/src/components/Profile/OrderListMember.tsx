import React from "react"


export const OrderListMember = ({order_id, date, timeslot, meeting_type, order_status}) => {
  return (
  <div>
    <h2>
      {meeting_type}
    </h2>
    <h3>
      {order_id}
    </h3>
    <h2>
      {order_status}
    </h2>
    <h2>
      {date}
    </h2>
    <h3>
      {timeslot}
    </h3>
  </div>
  )
}