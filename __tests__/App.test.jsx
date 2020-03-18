import React from 'react';
import { shallow } from 'enzyme';
// import { TestScheduler } from 'jest';
// import { template } from '@babel/core';
import App from '../client/src/App.jsx';


describe('App functionality', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('App should exist', () => {
    expect(wrapper).toExist();
  });

  // test for state?

  // test for child components

  // test for button functionality

  // test for carousel loop? simulate enough clicks to go a full revolution

  // test for favorites flag if there is time
});
