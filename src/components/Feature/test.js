import React from 'react';
import { mount } from 'enzyme';
import Feature from './index';

it('Parent feature renders in an li tag', () => {
  const el = mount(<Feature feature={{
    title: 'Example Feature',
    presence: false,
    subfeatures: []
  }}/>);
  expect(el.find('Feature')).toHaveLength(1);
  expect(el.find('li.feature')).toHaveLength(1);
});

it('Subfeatures render recursively in li tags', () => {
  const el = mount(<Feature feature={{
    title: 'Example Feature',
    presence: false,
    subfeatures: [
      {title: 'Subfeature 1', presence: true, subfeatures: [
        {title: 'Sub Subfeature', presence: true, subfeatures: []}
      ]},
      {title: 'Subfeature 2', presence: true, subfeatures: []}
    ]
  }}/>);
  expect(el.find('Feature')).toHaveLength(4);
  expect(el.find('li.feature')).toHaveLength(4);
});

it('Subfeatures render inside a ul tag', () => {
  const el = mount(<Feature feature={{
    title: 'Example Feature',
    presence: false,
    subfeatures: [
      {title: 'Subfeature 1', presence: true, subfeatures: [
        {title: 'Sub Subfeature', presence: true, subfeatures: []}
      ]},
      {title: 'Subfeature 2', presence: true, subfeatures: []}
    ]
  }}/>);
  expect(el.find('li.feature ul')).toHaveLength(2);
});

it('Indicates when a feature is present', () => {
  const el = mount(<Feature feature={{
    title: 'Example Feature',
    presence: true,
    subfeatures: []
  }}/>);
  expect(el.find('.feature .feature-icon').text()).toContain('Yes');
});

it('Indicates when a feature is not present', () => {
  const el = mount(<Feature feature={{
    title: 'Example Feature',
    presence: false,
    subfeatures: []
  }}/>);
  expect(el.find('.feature .feature-icon').text()).toContain('No');
});

it('Indicates when subfeatures are present', () => {
  const el = mount(<Feature feature={{
    title: 'Example Feature',
    presence: true,
    subfeatures: [
      {title: 'Subfeature 1', presence: true, subfeatures: []},
      {title: 'Subfeature 2', presence: true, subfeatures: []}
    ]
  }}/>);
  expect(el.find('.feature .feature .feature-icon').at(0).text()).toContain('Yes');
  expect(el.find('.feature .feature .feature-icon').at(1).text()).toContain('Yes');
  expect(el.find('.feature .feature .feature-icon').at(2).text()).toContain('Yes');
});

it('Indicates when subfeatures are not present', () => {
  const el = mount(<Feature feature={{
    title: 'Example Feature',
    presence: false,
    subfeatures: [
      {title: 'Subfeature 1', presence: false, subfeatures: []},
      {title: 'Subfeature 2', presence: false, subfeatures: []}
    ]
  }}/>);
  expect(el.find('.feature .feature .feature-icon').at(0).text()).toContain('No');
  expect(el.find('.feature .feature .feature-icon').at(1).text()).toContain('No');
  expect(el.find('.feature .feature .feature-icon').at(2).text()).toContain('No');
});

it('Features are clickable when they contain subfeatures', () => {
  const el = mount(<Feature feature={{
    title: 'Example Feature',
    presence: false,
    subfeatures: [
      {title: 'Subfeature 1', presence: false, subfeatures: []}
    ]
  }}/>);
  expect(el.find('.feature .panel-title a[role="button"]')).toHaveLength(1);
});

it('Features are not clickable when they dont contain subfeatures', () => {
  const el = mount(<Feature feature={{
    title: 'Example Feature',
    presence: false,
    subfeatures: []
  }}/>);
  expect(el.find('.feature .panel-title a[role="button"]')).toHaveLength(0);
});