import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;  //children will override later
  }

  getStyle = () => {
    return {
      color: this.color,
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
    this.color = '#72c5d9';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#e985ee';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#aba7e3';
  }
}

export { InfoAlert };
export { ErrorAlert };
export { WarningAlert };