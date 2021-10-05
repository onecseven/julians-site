declare interface meetingType {
  duration: number
  name: "YOGA" | "ENERGY"
}

declare type action = {
  type: string
  payload: any
}

declare namespace ActionTypes {
  interface POST_LOGIN extends action {
    type: "POST_LOGIN"
    payload: {
      password: string
      email: string
    }
  }
  interface LOGIN_SUCCESS extends action {
    type: "LOGIN_SUCCESS"
  }
}
