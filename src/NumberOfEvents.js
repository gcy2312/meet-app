import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberDisplayed: 32,
    errorText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);

    if (value < 1) {
      return this.setState({
        numberDisplayed: '',
        errorText: 'Please select a number between 1 and 32',
      });
    } else if (value > 32) {
      return this.setState({
        numberDisplayed: '',
        errorText: 'Please select a number between 1 and 32',
      });
    } else {
      this.setState({
        numberDisplayed: value,
        errorText: '',
      });
    }
  };


  render() {
    const numberDisplayed = this.state.numberDisplayed;
    return (

      <div className="NumberOfEvents ">

        <div className="py-3 d-flex flex-row-reverse align-items-center">

          <input
            type="number"
            className="event-number-input rounded text-align-center"
            value={numberDisplayed}
            onChange={this.handleInputChanged} />
          <span className="pe-2">Events displayed: </span>
        </div>

        <div className="d-flex flex-row-reverse align-items-center">
          <ErrorAlert text={this.state.errorText} />
        </div>





      </div>

    );
  }
}

export default NumberOfEvents;