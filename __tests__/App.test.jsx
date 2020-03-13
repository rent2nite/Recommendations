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
});
