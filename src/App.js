import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
  './api';
import { WarningAlert } from './Alert';

import Row from 'react-bootstrap/Row';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberDisplayed: 32,
    currentCity: "all",
    networkStatus: navigator.onLine ? 'Online' : 'Offline',
    showWelcomeScreen: undefined,
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

  async componentDidMount() {
    this.mounted = true;
    const { numberDisplayed } = this.state;
    const accessToken = localStorage.getItem('access_token');   //get token from LS
    const isTokenValid = (await checkToken(accessToken)).error ? false :  //verify token
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, numberDisplayed),
            locations: extractLocations(events)
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />
    const { networkStatus } = this.state;
    return (
      <div className="App">
        <WarningAlert text={networkStatus === 'Offline'
          ? 'App is running offline: data may be out of date'
          : ''} />

        <h1>Meet Up</h1>



        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          updateNumberOfEvents={this.updateNumberOfEvents} /><br />

        <NumberOfEvents
          updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} /><br />

        <EventList
          events={this.state.events} />

        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />

      </div>

    );
  }

}

export default App;