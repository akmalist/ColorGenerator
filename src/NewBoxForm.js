import React, { Component } from "react";
import "./styles.css";
import uuid from "uuid/v4";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value }); // whatever the user types in
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuid() }; //create id using uuid library for each new box
    this.props.addColor(newBox);
    this.setState({ height: "", width: "", color: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="height">Height:</label>
          <input
            name="height"
            id="height"
            type="number"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="width">Width:</label>

          <input
            id="width"
            name="width"
            type="number"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="color"> Color:</label>
          <input
            id="color"
            name="color"
            type="text"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
          <br />
          <button>Add a new Box</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
