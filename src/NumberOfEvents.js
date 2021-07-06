import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NumberOfEvents extends Component {
  state = {
    numberDisplayed: 32,
    errorText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;

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
      this.props.updateNumberOfEvents(event.target.value);
    }
  };


  render() {
    const numberDisplayed = this.state.numberDisplayed;
    return (
      <Row>
        <Col md={3}>
          <div className="NumberOfEvents">
            <Form>
              <Form.Label htmlFor="numberDisplayed">Events Displayed/Page</Form.Label><br />
              <input
                type="number"
                className="event-number-input"
                value={numberDisplayed}
                onChange={this.handleInputChanged} />
            </Form>
            <ErrorAlert text={this.state.errorText} />

          </div>
        </Col>
      </Row>
    );
  }
}

export default NumberOfEvents;