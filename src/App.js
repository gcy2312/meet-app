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

import logo from './assets/DevCalLogo.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberDisplayed: 32,
    currentCity: "all",
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

    if (!navigator.onLine) {
      this.setState({
        warningText: 'You are currently using the app offline. Events may be out of date.'
      });
    } else {
      this.setState({
        warningText: '',
      });
    }

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

    return (
      <div className="App">

        <Container fluid>
          <Row className="justify-content-md-center">

            <Col xs={12}>
              <img src={logo} alt='logo' className='logo-web' />
            </Col>
            <br />

            <Col xs={12} md={12}>
              <br />

              <h5 id="city-header">Check out upcoming Web Development events near you!!!</h5>
              <WarningAlert text={this.warningText} />
              <br />

              <CitySearch
                locations={this.state.locations}
                updateEvents={this.updateEvents}
                updateNumberOfEvents={this.updateNumberOfEvents} />

              <NumberOfEvents
                updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)} /><br />

            </Col>

            <div className="eventList-container h-75 overflow-scroll">
              <EventList
                events={this.state.events} />
            </div>
          </Row>

        </Container>

        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />

      </div >

    );
  }

}

export default App;