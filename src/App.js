import React, { Component } from "react";
import Builds from "./components/Builds";
import Calculator from "./components/Calculator";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      buildPrice: "",
      sellPrice: "",
      profit: "",
      builds: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleInput(key, value) {
    this.setState({
      [key]: value,
    });
    if (key == "buildPrice") {
      this.calculate(this.state.sellPrice, value);
    } else {
      this.calculate(value, this.state.buildPrice);
    }
  }

  calculate(sellPrice, buildPrice) {
    this.setState({
      profit: sellPrice - buildPrice,
    });
  }

  render() {
    return (
      <div className="App">
        <Builds />
        <Calculator
          handleInput={this.handleInput}
          calculate={this.calculate}
          profit={this.state.profit}
        />
      </div>
    );
  }
}

export default App;
