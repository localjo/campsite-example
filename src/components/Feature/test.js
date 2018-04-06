import React from 'react';
import { mount } from 'enzyme';
import Feature from './index';

it('Parent feature renders', () => {
  const el = mount(<Feature feature={{
    title: 'Example Feature',
    presence: false,
    subfeatures: []
  }}/>);
  expect(el.find('Feature')).toHaveLength(1);
});

it('Subfeatures render recursively', () => {
  const el = mount(<Feature feature={{
    title: 'Example Feature',
    presence: false,
    subfeatures: [
      {title: 'Subfeature 1', presence: true, subfeatures: []},
      {title: 'Subfeature 2', presence: true, subfeatures: []}
    ]
  }}/>);
  expect(el.find('Feature')).toHaveLength(3);
});
