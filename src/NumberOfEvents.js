import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberDisplayed: 10,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;

    this.setState({
      numberDisplayed: value,
    });
  };


  render() {
    return (
      <div className="NumberOfEvents">
        <label htmlFor="numberDisplayed"></label>
        <input
          type="number"
          className="event-number-input"
          value={this.state.numberDisplayed}
          onChange={this.handleInputChanged} />

      </div>
    );
  }
}

export default NumberOfEvents;