import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormGroup } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormGroup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
