import { Component } from "react";
import "./index.css";

class Counter extends Component {
  state = {
    count: 0,
  };
  onIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      value: true,
    }));
  };
  onReset = () => {
    this.setState((prevState) => ({
      count: 0,
      value: null,
    }));
  };
  onDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  onCounting = () => {
    this.setState((prevState) => ({}));
  };

  colorvalues = () => {
    if (this.state.count < 0) {
      return "negative";
    } else if (this.state.count > 0) {
      return "positive";
    } else {
      return "zero";
    }
  };

  countState = () => {
    if (this.state.count === 0) {
      return "Zero";
    } else if (this.state.count > 0) {
      return "Positive";
    } else if (this.state.count < 0) {
      return "Negative";
    }
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>
          <h1 className="heading">COUNTER </h1>
        </div>
        <div className="count-container">
          <div>
            <div className="count">
              <h1 className={this.colorvalues()}>{count}</h1>
            </div>
          </div>
          <div className="buttons">
            <div>
              <button
                type="button"
                className="button btn-dec"
                onClick={this.onDecrement}
              >
                Decrement
              </button>
            </div>

            <div>
              <button
                type="button"
                className="button btn-reset"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>

            <div>
              <button
                type="button"
                className="button btn-add"
                onClick={this.onIncrement}
              >
                Increment
              </button>
            </div>
          </div>
          <div className="sign-container">
            <div className={this.colorvalues()}>{this.countState()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
