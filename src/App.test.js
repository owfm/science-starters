// App.test.js
import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';

import App from './App';

describe('App component', async (assert) => {
  const createApp = (props = {}) => render(<App {...props} />);

  {
    const props = {};
    const $ = createApp(props);

    assert({
      given: 'no props',
      should: 'render a button',
      actual: $('.increment-button').length,
      expected: 1,
    });
  }

  {
    const props = {};
    const $ = createApp(props);

    assert({
      given: 'no props',
      should: 'suggest render a number',
      actual: $('.number')
        .html()
        .trim(),
      expected: '0',
    });
  }
});
