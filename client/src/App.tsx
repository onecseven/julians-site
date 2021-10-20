import React, { Component } from "react"
import { hot } from "react-hot-loader/root"
import { Provider } from "react-redux"
import { Navbar } from "./components/Navbar"
import { store } from "./store/store"
import "./App.css"
import { Router, Link } from "@reach/router"
import { Contact } from "./routes/Contact"
import { About } from "./routes/About"
import { OptionsField as Services } from "./routes/Services"
import { Book } from "./routes/Book"
import { makeStyles } from "@mui/styles"
import { Login } from "./routes/Login"
import { Register } from "./routes/Register"
import { Test } from "./routes/Test"
import { SnackbarArea } from "./routes/SnackbarArea"
import { Paper } from "@mui/material"
import { OrderList } from "./components/Profile/OrderList"

// const useStyles = makeStyles((theme) => ({
//   papier: {
//     width: "60%",
//     maxWidth: 480,
//     backgroundColor: "#f3f1d1",
//     marginLeft: "25%",
//     marginRight: "25%",
//     marginTop: "2%",
//     textAlign: "center",
//     transition: "all 0.5s ease",
//     padding: "10px",
//   },
// }))

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Paper elevation={3} className={"Gay"}>
          <Router>
            <OrderList path="/" />
            <Contact path="contact" />
            <About path="about" />
            <Services path="services" />
            <Book path="book/:service" />
            <Login path="login/*" />
            <Register path="register" />
            <Test path="test" />
          </Router>
        </Paper>
        <SnackbarArea />
      </Provider>
    </div>
  )
}

export default hot(App)
