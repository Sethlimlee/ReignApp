import React, { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.props.handleInput("buildPrice", e.target.value)}
        ></input>
        <input
          onChange={(e) => this.props.handleInput("sellPrice", e.target.value)}
        ></input>
        <p>{this.props.profit}</p>
      </div>
    );
  }
}

export default Calculator;
