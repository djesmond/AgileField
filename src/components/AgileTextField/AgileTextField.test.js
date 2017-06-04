import React from 'react';
import ReactDOM from 'react-dom';
import AgileTextField from './AgileTextField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AgileTextField label="Test" />, div);
});
