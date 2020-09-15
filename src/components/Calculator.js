import React, { Component } from "react";

class Calculator extends Component {
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
                className="calcInput"
                onChange={(e) =>
                  this.props.handleInput("buildPrice", e.target.value)
                }
                value={this.props.buildPrice}
              ></input>
            </span>
          </div>
          <div className="calculatorRow">
            Sell Price:
            <span>
              $
              <input
                className="calcInput"
                onChange={(e) =>
                  this.props.handleInput("sellPrice", e.target.value)
                }
                value={this.props.sellPrice}
              ></input>
            </span>
          </div>
          <div className="calculatorRow">
            Transaction Fee:
            <span>
              <input
                className="calcInput"
                onChange={(e) =>
                  this.props.handleInput("transactionFee", e.target.value)
                }
                value={this.props.transactionFee}
              ></input>
              %
            </span>
          </div>
        </div>
        <div className="calculatorRowProfit">
          Profit:
          <div className="profit">${this.props.profit}</div>
        </div>
        <div className="calcBottom">
          <div className="amazonMargin">
            <p>Transaction Fee: ${this.props.amazonFee}</p>
            <p>Shipping Cost: ${this.props.shippingPrice}</p>
            <p>Margin: {this.props.margin}%</p>
          </div>
          <div>
            <button
              className="saveButton"
              onClick={(e) =>
                this.props.updateBuild(
                  this.props.buildId,
                  this.props.buildPrice,
                  this.props.transactionFee,
                  this.props.sellPrice
                )
              }
            >
              Save to Build
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
