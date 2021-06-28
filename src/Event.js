import React, { Component } from "react";

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

    return (< div className="event" >
      <h3>{event.summary}</h3>
      <p><b>Creator: </b>{event.creator.email}</p>
      <p><b>Start Time: </b>{event.start.dateTime}</p>
      <p><b>Location: </b>{event.location}</p>
      <p className="description">{this.description(event)}</p>

      <button className="details-btn" onClick={() => { this.showMore() }}>{this.showText()}</button>

    </div >
    );
  }
}
export default Event;