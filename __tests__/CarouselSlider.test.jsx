import React from 'react';
import { shallow } from 'enzyme';
import CarouselSlider from '../client/src/CarouselSlider.jsx';

describe('Carousel Slider functionality', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CarouselSlider />);
  });

  test('Slider should exist', () => {
    expect(wrapper).toExist();
  });

  test('Buttons to affect state', () => {
    wrapper.setState({ activeProp: 0 });
    wrapper.find('.nxtBtn').simulate('click');
    expect(wrapper.state('activeProp')).toEqual(1);
    wrapper.find('.prvBtn').simulate('click');
    expect(wrapper.state('activeProp')).toEqual(0);
  });

  test('Previous button to be disabled on page load', () => {
    wrapper = mount(<CarouselSlider />);
    wrapper.setState({ activeProp: 0 });
    wrapper
      .find('.prvBtn')
      .first()
      .simulate('click');
    expect(wrapper.state('activeProp')).toEqual(0);
  });

  test('Should have at least one entry', () => {
    wrapper = mount(<CarouselSlider />);
    expect(wrapper.find('.slider-entry')).toBeDefined();
  });
});
