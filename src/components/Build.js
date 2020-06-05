import React, { Component } from "react";

class Build extends Component {
  render() {
    return (
      <div
        onClick={(e) =>
          this.props.calculate(
            this.props.sellPrice,
            this.props.buildPrice,
            this.props.shippingPrice,
            this.props.id
          )
        }
        className="build"
        tabIndex="1"
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
