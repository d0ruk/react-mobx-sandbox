import React, { Component } from "react"
// import { extendObservable, observable } from "mobx"
// import { observer } from "mobx-react"

import logo from "./logo.svg"
import "./App.css";

import Resizer from "./components/Resizer"

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Resizer logo={logo} />
      </div>
    );
  }
}
