import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;  //children will override later
    this.fontWeight = '600';
    this.fontSize = '1rem';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontWeight: this.fontWeight,
      fontSize: this.fontSize,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p className="alert-message" style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
  }
}

export { InfoAlert };
export { ErrorAlert };
export { WarningAlert };