import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mock-data';

describe('<EventList/> component', () => {
  let fullEvent;
  beforeAll(() => {
    fullEvent = shallow(<Event event={mockData[0]} />)
  });

  test('render event list', () => {
    const EventListWrapper = shallow(<EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });

  test('render the event show more button', () => {
    expect(fullEvent.find('.details-btn')).toHaveLength(1);
  });

  test('show more button should be false on render', () => {
    expect(fullEvent.state('showMore')).toBe(false);
  });

  test('if showMore is false, simulate click to show details', () => {
    const fullEvent = shallow(<Event event={mockData[0]} />);
    fullEvent.find('.details-btn').simulate('click');
    expect(fullEvent.state('showMore')).toBe(true);
  });

  test('if showMore is true, simulate click to hide details', () => {
    const fullEvent = shallow(<Event event={mockData[0]} />);
    fullEvent.setState({ 'showMore': true });
    fullEvent.find('.details-btn').simulate('click');
    expect(fullEvent.state('showMore')).toBe(false);
  });
});