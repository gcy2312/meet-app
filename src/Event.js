import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    if (this.state.showMore === true) {
      return (
        <div className='event-details'>
          <h6>About the event: </h6>
          <p id='event-description'>
            <em>{event.description}</em>
          </p>
          <a href={event.htmlLink}
            color='secondary'
            className='event-link'
            target='_blank'
            rel='noreferrer'>See event details on Google Calendar
          </a>

        </div>
      );
    } else {
      return "";
    }
  };

  render() {
    const { event } = this.props;
    const startEvent = new Date(event.start.dateTime);
    const endEvent = new Date(event.end.dateTime);

    return (
      < div className="event mb-2" >

        <Card className="event-card" id="event-card">
          <Card.Title id="card-title">{event.summary}</Card.Title>
          <Card.Subtitle id="card-subtitle">Creator: {event.creator.email}</Card.Subtitle>
          <Card.Text id="card-text">Start Time: {startEvent.toLocaleString()}(local time)</Card.Text>
          <Card.Text id="card-location">Location: {event.location}</Card.Text><br />
          {this.state.showMore === true && (
            <Card.Text id="card-details" className="EventDetails">{this.description(event)}</Card.Text>
          )}
          <br />
          <div className="py-3 d-flex flex-row-reverse align-items-center">
            <Button variant="link" id="link" className="details-btn" onClick={() => { this.showMore() }}>{this.showText()}</Button>
          </div>

        </Card>

      </div >
    );
  }
}
export default Event;