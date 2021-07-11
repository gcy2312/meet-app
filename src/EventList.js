import React, { Component } from 'react';
import Event from './Event';
import { Grid } from '@material-ui/core';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <ul className="EventList">
          <Grid container spacing={2}>
            {events.map((event) => (
              <Grid key={event.id} item xs={12} sm={12} md={6}>
                <li key={event.id}>
                  <Event event={event} />
                </li>
              </Grid>
            ))}
          </Grid>
        </ul>

      </div >
    );
  }
}

export default EventList;