import React from 'react';
import NewDeckView from './NewDeckView';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<NewDeckView />).toJSON();
  expect(rendered).toBeTruthy();
});
