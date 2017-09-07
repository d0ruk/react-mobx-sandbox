import React, { Component } from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"

import styles from "./Resizer.css"

@observer
export default class Resizer extends Component {

  @observable step = 3

  render() {
    const { logo } = this.props;

    return (
      <div>
        <img
          className={styles.logo}
          src={logo}
          height={this.step * 50}
          alt="logo"
        />
        <div className={styles.buttons}>
          <button
            onClick={this.onIncrement}
          >
            +
          </button>
          <button
            onClick={this.onDecrement}
          >
            -
          </button>
        </div>
      </div>
    );
  }

  onIncrement = evt => {
    evt.preventDefault();
    if (this.step > 5)
      return this.step = 3;

    this.step++;
  }

  onDecrement = evt => {
    evt.preventDefault();
    if (this.step === 1)
      return this.step = 3;

    this.step--;
  }
}
