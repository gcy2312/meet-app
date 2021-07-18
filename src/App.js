import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './data-visualization/EventGenre';
import WelcomeScreen from './WelcomeScreen';
import { WarningAlert } from './Alert';

import { getEvents, extractLocations, checkToken, getAccessToken } from
  './api';

import logo from './assets/MeetAppLogo.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberDisplayed: 32,
    currentCity: "all",
    warningText: '',
    showWelcomeScreen: undefined,
  }

  async componentDidMount() {
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
      this.updateEvents()
    }
    this.mounted = true;
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

  updateEvents = (location, eventCount) => {
    const { currentCity, numberDisplayed } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === "all"
            ? events
            : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberDisplayed);
        this.setState({
          events: filteredEvents,
          currentCity: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents =
          currentCity === "all"
            ? events
            : events.filter((event) => event.location === currentCity);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberDisplayed: eventCount,
        });
      });
    }
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map(location => {
      const number = events.filter(event => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    const { locations, numberDisplayed, events, warningText, showWelcomeScreen } = this.state;

    if (showWelcomeScreen === undefined) return <div
      className="App" />

    return (
      <div className="App">

        <WarningAlert id="warning-text"
          text={warningText}
        />

        <Container fluid>
          <Row className="justify-content-md-center">

            <Col xs={12}>
              <img src={logo} alt='logo' className='logo-web' />
            </Col>
            <br />

            <Col xs={12} md={12}>
              <br />

              <h6 id="city-header">Check out upcoming Web Development events near you!!!</h6>

              <br />

              <CitySearch
                locations={locations}
                updateEvents={this.updateEvents}
              />

              <NumberOfEvents
                numberDisplayed={numberDisplayed}
                updateEvents={this.updateEvents}
              /><br />

            </Col>
          </Row>


          <div className="data-vis-wrapper">
            <ResponsiveContainer height={300} >
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="city" />
                <YAxis
                  allowDecimals={false}
                  type="number"
                  dataKey="number"
                  name="number of events"
                />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter data={this.getData()} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>

            <EventGenre events={events} />
          </div>
          <br />

          <Row>
            <Col md={12}>
              <div className="eventList-container h-75 overflow-scroll">
                <EventList
                  events={events} />
              </div>
            </Col>
          </Row>



        </Container>

        <WelcomeScreen showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />

      </div >

    );
  }
}

export default App;