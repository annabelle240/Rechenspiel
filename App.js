import React, { Component } from 'react';
import './index.css'; // You may need to create this CSS file for styling

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 1,
      score: 0,
      response: '',
      incorrect: false,
    };
  }

  render() {
    if (this.state.score >= 5) {
      return this.renderWin();
    } else {
      return this.renderProblem();
    }
  }

  renderProblem() {
    return (
      <div>
        <h1 className={this.state.incorrect ? 'incorrect' : ''}>
          {this.state.num1} + {this.state.num2}
        </h1>
        <input
          onKeyPress={this.inputKeyPress}
          onChange={this.updateResponse}
          value={this.state.response}
        />
        <div>Score: {this.state.score}</div>
      </div>
    );
  }

  renderWin() {
    return <h1>Herzlichen Glückwunsch! Sie haben gewonnen!</h1>;
  }

  updateResponse = (event) => {
    this.setState({
      response: event.target.value,
    });
  };

  inputKeyPress = (event) => {
    if (event.key === 'Enter') {
      const answer = parseInt(this.state.response);
      if (answer === this.state.num1 + this.state.num2) {
        this.setState((state) => ({
          score: state.score + 1,
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          response: '',
          incorrect: false,
        }));
      } else {
        this.setState({
          response: '',
          incorrect: true,
        });
      }
    }
  };
}

export default App;
