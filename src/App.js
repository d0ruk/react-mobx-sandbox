import React, { Component } from "react"

import logo from "./logo.svg"
import styles from "./index.css"

import Resizer from "./components/Resizer"
import Storer from "./components/Storer"
import Lister from "./components/Lister"

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <Resizer logo={logo} />
        <Storer />
        <Lister />
      </div>
    );
  }
}
