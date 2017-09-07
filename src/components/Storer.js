import React, { Component } from "react"
import { observable, reaction } from "mobx"
import { observer } from "mobx-react"

const styles = {
  textarea: {
    height: "15rem",
    width: "15rem",
    padding: ".5rem",
  }
};

@observer
export default class Storer extends Component {

  @observable text = ""

  constructor(...args) {
    super(...args);
    reaction(
      () => this.text,
      text => localStorage.setItem("text", text)
    );
  }

  render() {
    return (
      <div>
        <textarea
          style={styles.textarea}
          value={this.text}
          onChange={this.onChange}
          placeholder="Your editing will be synced with localStorage"
        >
          Here be text
          </textarea>
      </div>
    );
  }

  onChange = evt => {
    evt.preventDefault();
    this.text = evt.target.value;
  }
}
