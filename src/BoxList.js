import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addColor(box) {
    this.setState(state => ({
      boxes: [...state.boxes, box]
    }));
  }

  removeColor(id) {
    this.setState({ boxes: this.state.boxes.filter(box => box.id !== id) });
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        removeBox={this.removeColor} // you can also do via inline function removeBox={() => this.remove(box.id)}
      />
    ));
    return (
      <div>
        <h1>Create color boxes</h1>
        <NewBoxForm addColor={this.addColor} />
        <div>{boxes}</div>
      </div>
    );
  }
}

export default BoxList;
