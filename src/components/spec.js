import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

function setUp(props={}) {
  const component = shallow(<App />);
  return component;
}

function findByTestAttr(component, attr) {
  return component.find(attr);
}

describe('App Component', () => {
  it('should render without errors', () => {
    
    const wrapper = setUp();
    const container = findByTestAttr(wrapper, '.container');
    expect(container.length).toBe(1);
  });
});