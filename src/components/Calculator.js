import React, { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="calculator">
        <h3>Profitability Calculator</h3>
        <div className="calculatorInputs">
          <div className="calculatorRow">
            Build Price:
            <span>
              $
              <input
                onChange={(e) =>
                  this.props.handleInput("buildPrice", e.target.value)
                }
              ></input>
            </span>
          </div>
          <div className="calculatorRow">
            Sell Price:
            <span>
              $
              <input
                onChange={(e) =>
                  this.props.handleInput("sellPrice", e.target.value)
                }
              ></input>
            </span>
          </div>

          <div className="calculatorRow">
            Shipping Price:
            <span>
              $
              <input
                onChange={(e) =>
                  this.props.handleInput("shippingPrice", e.target.value)
                }
              ></input>
            </span>
          </div>
        </div>
        <div className="calculatorRowProfit">
          Profit:
          <div className="profit">${this.props.profit}</div>
        </div>
        <p>Amazon Fee: ${this.props.amazonFee}</p>
        <p>Margin: {this.props.margin}%</p>
      </div>
    );
  }
}

export default Calculator;
