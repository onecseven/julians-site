import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { Provider } from "react-redux"
import { Navbar } from "./components/Navbar"
import store from "./store"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Navbar />
        </Provider>
      </div>
    )
  }
}

export default hot(module)(App)
