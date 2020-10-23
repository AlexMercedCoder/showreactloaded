import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataStore } from './datastore';
import './index.scss';

ReactDOM.render(
  <Router>
    <DataStore>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DataStore>
  </Router>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
