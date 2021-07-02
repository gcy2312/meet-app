import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import Event from "../Event";
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is open.', () => {
      AppWrapper = mount(<App />);
    });

    when('the user first sees the event list', () => {
      //no code here - nothings happened
    });

    then('user will see the details of the event collapsed by default', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.EventDetails')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let fullEvent;
    given('the elements are collapsed', () => {
      fullEvent = shallow(<Event event={mockData[0]} />);
    });

    when('the user click on show details button', () => {
      fullEvent.find('.details-btn').simulate('click');
    });

    then('the event details will be shown', () => {
      expect(fullEvent.find('.EventDetails')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let fullEvent;
    given('the event info is shown', () => {
      fullEvent = shallow(<Event event={mockData[0]} />);
      fullEvent.setState({ showMore: true });
      expect(fullEvent.find('.EventDetails')).toHaveLength(1);
    });

    when('the user clicks hide details button', () => {
      fullEvent.find('.details-btn').simulate('click');
    });

    then('the event info will be collapsed', () => {
      expect(fullEvent.find('.EventDetails')).toHaveLength(0);
    });
  });
});