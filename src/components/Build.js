import React, { Component } from "react";

class Build extends Component {
  render() {
    return (
      <div
        onClick={(e) =>
          this.props.calculate(
            this.props.sellPrice,
            this.props.buildPrice,
            this.props.shippingPrice
          )
        }
        className="build"
      >
        <div className="buildName">
          <section>{this.props.name}</section>
        </div>
        <div className="buildPrices">
          <section>Build Price: ${this.props.buildPrice}</section>
          <section>Shipping Price: ${this.props.shippingPrice}</section>
          <section>Selling Price: ${this.props.sellPrice}</section>
        </div>
      </div>
    );
  }
}

export default Build;
