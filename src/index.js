import React from 'react';
import ReactDOM from 'react-dom';
import Client from './utils/client';

const client = new Client();

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));
