import React, { Component } from 'react';
import { InfoAlert } from './Alert';

import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

import cityImg from './assets/buildings.png';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false,
    infoText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
      infoText: '',
    });
    this.props.updateEvents(suggestion, this.props.numberDisplayed);
  }

  render() {
    return (
      <div className="CitySearch">

        <InfoAlert id="info-alert" text={this.state.infoText} />

        <InputGroup className="mb-3 align-center">
          <InputGroup.Prepend>
            <img id="cityImg"
              alt=""
              src={cityImg}
              width="35"
              height="35"
              fluid="true"
            />
            {/* <EditLocationIcon /> */}
          </InputGroup.Prepend>
          <FormControl
            placeholder="Filter events by city"
            aria-label="Search for events by city"
            aria-describedby="basic-addon1"
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => { this.setState({ showSuggestions: true }) }}

          />
        </InputGroup>

        <ul
          className="suggestions w-100 flex-column align-items-center"
          style={this.state.showSuggestions
            ? { display: 'flex' }
            : { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li
              className="matchSuggestion"
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
          ))}
          <li
            className="seeAll"
            key="all"
            onClick={() => { this.handleItemClicked("all") }}>
            <b>See all cities</b>
          </li>
        </ul>

        <br />

      </div>
    );
  }
}

export default CitySearch;