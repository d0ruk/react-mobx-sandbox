import React, { Component } from "react"
import { observable, action } from "mobx"
import { observer } from "mobx-react"

import styles from "./Lister.css"

const template = handle => `https://api.github.com/users/${handle}/repos`;

@observer
class Lister extends Component {

  @observable handle = "";
  @observable repos = [];

  constructor(...args) {
    super(...args);
    this.onFetch = this.onFetch.bind(this);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <input
            placeholder="github handle"
            value={this.handle}
            onChange={this.onHandleChange}
          />
          <button
            onClick={() => this.onFetch(this.handle)}
          >
            fetch
          </button>
        </div>
        <Repositories
          repos={this.repos}
        />
      </div>
    );
  }

  onHandleChange = evt => {
    evt.preventDefault();
    this.handle = evt.target.value;
  }

  async onFetch(handle) {
    // TODO: catch
    const repos = await fetch(template(handle))
      .then(res => res.json())

    this.repos = repos
  }
}

function Repositories({ repos }) {
  return (
    <ul className={styles.repos}>
      {repos.map(r => (
        <li key={r.name}>
          <a href={r.url} target="_blank">{r.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default Lister
