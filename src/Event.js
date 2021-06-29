import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Event extends Component {

  state = {
    showMore: false
  }

  showMore() {
    this.setState({ showMore: !this.state.showMore });
  }

  showText() {
    return this.state.showMore ? "Hide Event Details" : "Show Event Details";
  }

  description(event) {
    return this.state.showMore ? event.description : "";
  }

  render() {
    const { event } = this.props;

    return (
      < div className="event mb-2" >
        <Row className="justify-content-md-center">
          <Col md={12}>
            <Card>
              <Card.Title>{event.summary}</Card.Title>
              <Card.Subtitle><b>Creator: </b>{event.creator.email}</Card.Subtitle>
              <Card.Text><b>Start Time: </b>{event.start.dateTime}</Card.Text>
              <Card.Text><b>Location: </b>{event.location}</Card.Text>
              <Card.Text className="description">{this.description(event)}</Card.Text>
              <br />

              <Button variant="primary" className="details-btn" onClick={() => { this.showMore() }}>{this.showText()}</Button>

            </Card>
          </Col>
        </Row>

      </div >
    );
  }
}
export default Event;