import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

import Row from 'react-bootstrap/Row';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberDisplayed: 32,
    currentCity: "all",
  }

  updateEvents = (location, numberDisplayed) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ? events
        :
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, numberDisplayed),
          currentCity: location,
        });
      }
    });
  };

  updateNumberOfEvents(number) {
    this.setState({ numberDisplayed: number });
    const { currentCity } = this.state;
    this.updateEvents(currentCity, number);
  }

  componentDidMount() {
    const { numberDisplayed } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, numberDisplayed),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">

        <h1>Meet Up</h1>

        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          updateNumberOfEvents={this.updateNumberOfEvents} /><br />

        <NumberOfEvents
          updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} /><br />

        <EventList
          events={this.state.events} />


      </div>

    );
  }

}

export default App;