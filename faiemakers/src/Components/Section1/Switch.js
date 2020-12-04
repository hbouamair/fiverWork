import React, { Component } from "react";
import Switch from "react-switch";
export default class BasicExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="example">
        <Switch

          onChange={this.handleChange}
          checked={this.state.checked}
          className="react-switch"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
    );
  }
}
