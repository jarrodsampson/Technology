// Testing to check for

// does not receive any props.

// check if component always rendered

// check if the rendered div contains everything else that gets rendered.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});
