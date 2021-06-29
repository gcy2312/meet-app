import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberDisplayed: 32,
    // currentLocation: 'all',
  }

  componentDidMount() {
    this.mounted = true;
    const { numberDisplayed } = this.state;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ? events
        :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        currentLocation: location
      });
    });
  }

  render() {
    return (
      <div className="App">
        <NumberOfEvents />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>

    );
  }

}

export default App;