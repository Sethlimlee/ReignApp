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
      shippingPrice: "",
      amazonFee: "",
      profit: "",
      margin: "",
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
      console.log("its build");

      this.calculate(this.state.sellPrice, value, this.state.shippingPrice);
    } else if (key == "sellPrice") {
      console.log("its sell");
      this.calculate(value, this.state.buildPrice, this.state.shippingPrice);
    } else if (key == "shippingPrice") {
      console.log("its shipping");
      this.calculate(this.state.sellPrice, this.state.buildPrice, value);
    }
  }

  calculate(sellPrice, buildPrice, shippingPrice) {
    var amazonFee = (
      ((parseFloat(sellPrice) + parseFloat(shippingPrice)) * 6) / 100 +
      0.99
    ).toFixed(2);
    var margin = (
      ((sellPrice - buildPrice - amazonFee) / sellPrice) *
      100
    ).toFixed(2);
    console.log(amazonFee);
    this.setState({
      profit: (sellPrice - buildPrice - amazonFee).toFixed(2),
      amazonFee: amazonFee,
      margin: margin,
    });
  }

  render() {
    return (
      <div className="App">
        <Calculator
          handleInput={this.handleInput}
          calculate={this.calculate}
          profit={this.state.profit}
          amazonFee={this.state.amazonFee}
          margin={this.state.margin}
        />
      </div>
    );
  }
}

export default App;
