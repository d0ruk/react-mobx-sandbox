import React, { Component } from "react"
import { extendObservable, observable } from "mobx"
import { observer } from "mobx-react"

@observer
export default class App extends Component {

  @observable step = 2;

  render() {
    const { logo } = this.props;

    return (
      <div>
        <img
          src={logo}
          height={this.step * 50}
        />
        <p>
          <button
            className="button"
            onClick={this.onIncrement}
          >
            +
          </button>
          <button
            className="button"
            onClick={this.onDecrement}
          >
            -
          </button>
        </p>
      </div>
    );
  }

  onIncrement = evt => {
    evt.preventDefault();
    this.step++;
  }

  onDecrement = evt => {
    evt.preventDefault();
    this.step--;
  }
}
