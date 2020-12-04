import React , {Component} from 'react'
import Switch from "react-switch";
export default class Swit extends Component {

  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange1 = this.handleChange1.bind(this);
  }

  handleChange1(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="example">
        
          <Switch
            onChange={this.handleChange1}
            checked={this.state.checked}
            className="react-switch"
            uncheckedIcon={false}
            checkedIcon={false}
          />
      </div>
    );
  }
}