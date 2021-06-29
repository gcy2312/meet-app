import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class NumberOfEvents extends Component {
  state = {
    numberDisplayed: 32,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;

    this.setState({
      numberDisplayed: value,
    });
    this.props.updateNumberOfEvents(event.target.value);
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
          </div>
        </Col>
      </Row>
    );
  }
}

export default NumberOfEvents;