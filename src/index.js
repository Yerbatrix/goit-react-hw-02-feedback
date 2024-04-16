import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleGood = evt => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };

  handleNeutral = evt => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  };
  handleBad = evt => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Please leave feedback</h1>
        <span></span>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive feedback: {positiveFeedbackPercentage}%</p>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<Counter />);
