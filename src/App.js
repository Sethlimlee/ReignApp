import React, { Component } from "react";
import Build from "./components/Build";
import Calculator from "./components/Calculator";
import axios from "axios";

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
  //test//
  componentDidMount() {
    axios.get("/api/builds").then((response) => {
      console.log(response.data);
      this.setState({
        builds: response.data,
      });
    });
  }

  handleInput(key, value) {
    this.setState({
      [key]: value,
    });
    if (key === "buildPrice") {
      this.calculate(this.state.sellPrice, value, this.state.shippingPrice);
    } else if (key === "sellPrice") {
      this.calculate(value, this.state.buildPrice, this.state.shippingPrice);
    } else {
      this.calculate(this.state.sellPrice, this.state.buildPrice, value);
    }
  }

  calculate(sellPrice, buildPrice, shippingPrice) {
    var amazonFee =
      ((parseFloat(sellPrice) + parseFloat(shippingPrice)) * 6) / 100 + 0.99;
    var margin = ((sellPrice - buildPrice - amazonFee) / sellPrice) * 100;
    this.setState({
      profit: (sellPrice - buildPrice - amazonFee).toFixed(2),
      amazonFee: amazonFee.toFixed(2),
      margin: margin.toFixed(2),
      sellPrice: sellPrice,
      buildPrice: buildPrice,
      shippingPrice: shippingPrice,
    });
  }

  render() {
    const allBuilds = this.state.builds.map((build) => {
      return (
        <Build
          key={build.id}
          name={build.name}
          buildPrice={build.buildprice}
          shippingPrice={build.shippingprice}
          sellPrice={build.sellprice}
          calculate={this.calculate}
        ></Build>
      );
    });
    return (
      <div className="App">
        <section className="builds">{allBuilds}</section>
        <Calculator
          handleInput={this.handleInput}
          calculate={this.calculate}
          buildPrice={this.state.buildPrice}
          shippingPrice={this.state.shippingPrice}
          sellPrice={this.state.sellPrice}
          profit={this.state.profit}
          amazonFee={this.state.amazonFee}
          margin={this.state.margin}
        />
      </div>
    );
  }
}

export default App;
