import { Component } from "react";
import "./index.css";

class Timer extends Component {
  state = {
    isTimerRunning: false,
    timeEllapsed: 0,
  };

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  updateTime = () => {
    this.setState((prevState) => ({
      timeEllapsed: prevState.timeEllapsed + 1,
    }));
  };

  onStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000);
    this.setState({
      isTimerRunning: true,
    });
  };
  onStop = () => {
    clearInterval(this.timeInterval);
    this.setState({ isTimerRunning: false });
  };
  onReset = () => {
    clearInterval(this.timeInterval);
    this.setState({
      isTimerRunning: false,
      timeEllapsed: 0,
    });
  };

  renderSeconds = () => {
    const { timeEllapsed } = this.state;
    const seconds = Math.floor(timeEllapsed % 60);

    if (seconds < 10) {
      return `0${seconds}`;
    }
    return seconds;
  };

  renderMinutes = () => {
    const { timeEllapsed } = this.state;
    const minutes = Math.floor(timeEllapsed / 6);

    if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  };
  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`;

    return (
      <div>
        <h1 className="timer heading">STOP WATCH</h1>
        <div className="timer-container">
          <div className="timer heading">
            <p>Timer</p>
          </div>
          <div className="timer timing">{time}</div>
          <div className="btn-container">
            <button
              type="button"
              onClick={this.onStart}
              className="start-timer button btn-start"
              disabled={this.isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              onClick={this.onStop}
              className="stop-timer button btn-stop"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={this.onReset}
              className="reset-timer button btn-reset"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
