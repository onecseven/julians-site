import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { Provider } from "react-redux"
import store from "./store"
import "./App.css"
import { Navbar } from "./components/Navbar"
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
