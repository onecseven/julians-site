import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { Provider } from "react-redux"
import { Navbar } from "./components/Navbar"
import { store } from "./store/store"
import "./App.css"
import { Router, Link } from "@reach/router"
import { Contact } from "./routes/Contact"
import { About } from "./routes/About"
import { OptionsField as Services } from "./routes/OptionsField"
import { Book } from "./routes/Book"
import { makeStyles, Paper } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  papier: {
    width: "60%",
    maxWidth: 480,
    backgroundColor: "#f3f1d1",
    marginLeft: "25%",
    marginRight: "25%",
    marginTop: "2%",
    textAlign: "center",
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Paper elevation={3} className={classes.papier}>
          <Router>
            <Contact path="contact" />
            <About path="about" />
            <Services path="services" />
            <Book path="book/:service" />
          </Router>
        </Paper>
      </Provider>
    </div>
  )
}

export default hot(module)(App)
