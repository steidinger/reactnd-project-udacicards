import React from 'react';
import { DeckListView } from './DeckListView';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<DeckListView />).toJSON();
  expect(rendered).toBeTruthy();
});
