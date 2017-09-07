import React, { Component } from "react"

import logo from "./logo.svg"
import styles from "./index.css"

import Resizer from "./components/Resizer"

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Resizer logo={logo} />
      </div>
    );
  }
}
