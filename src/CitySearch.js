import React, { Component } from 'react';
import { InfoAlert } from './Alert';

import Form from 'react-bootstrap/Form';
import { ListGroup } from 'react-bootstrap';

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
        {/* <InfoAlert text={this.state.infoText} /> */}
        <Form>
          <Form.Label>Filter Events By City: </Form.Label>
          <InfoAlert text={this.state.infoText} /><br />
          <input
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => { this.setState({ showSuggestions: true }) }}
          />
          <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
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
        </Form>
      </div>
    );
  }
}

export default CitySearch;