import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('App renders without crashing', () => {
  const el = mount(<App />);
  expect(el.find('App')).toHaveLength(1);
  el.find('.next-button').at(0).simulate('click');
});
