import React, { Component } from "react";
import Build from "./components/Build";
import Calculator from "./components/Calculator";
import axios from "axios";

import "./App.css";
import "./reset.css";

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
      buildId: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.calculate = this.calculate.bind(this);
    this.updateBuild = this.updateBuild.bind(this);
  }

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

  calculate(sellPrice, buildPrice, shippingPrice, id = this.state.buildId) {
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
      buildId: id,
    });
  }

  updateBuild(id, buildPrice, shippingPrice, sellPrice) {
    console.log(id);
    axios
      .put(`/api/updatebuild/${id}/${buildPrice}/${shippingPrice}/${sellPrice}`)
      .then((res) => {
        axios.get("/api/builds").then((response) => {
          console.log(response.data);
          this.setState({
            builds: response.data,
          });
        });
      });
  }

  render() {
    const allBuilds = this.state.builds.map((build) => {
      return (
        <Build
          key={build.id}
          id={build.id}
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
          updateBuild={this.updateBuild}
          buildPrice={this.state.buildPrice}
          shippingPrice={this.state.shippingPrice}
          sellPrice={this.state.sellPrice}
          profit={this.state.profit}
          amazonFee={this.state.amazonFee}
          margin={this.state.margin}
          buildId={this.state.buildId}
        />
      </div>
    );
  }
}

export default App;
