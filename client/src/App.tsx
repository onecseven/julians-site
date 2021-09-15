import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { Provider } from "react-redux"
import { Navbar } from "./components/Navbar"
import {store} from "./store/store"
import "./App.css"
import { Router, Link } from "@reach/router"
import { Contact } from "./routes/Contact"
import { About } from "./routes/About"
import { Services } from "./routes/BookForm"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Navbar />
          <Router>
            <Contact path="contact" />
            <About path="about"/>
            <Services path="services"/>
          </Router>
        </Provider>
      </div>
    )
  }
}

export default hot(module)(App)
