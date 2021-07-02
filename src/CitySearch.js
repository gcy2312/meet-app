import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { ListGroup } from 'react-bootstrap';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });
    this.props.updateEvents(suggestion, this.props.numberDisplayed);
  }

  render() {
    return (
      <div className="CitySearch">
        <Form>
          <Form.Label>Filter Events By City</Form.Label>
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