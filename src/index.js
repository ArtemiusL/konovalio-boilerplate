import * as React from 'react';
import { render } from 'react-dom';

// import 'assets/fonts/fonts.css';

import App from './App';

const renderApp = Appliaction => {
  render(<Appliaction />, document.getElementById('root'));
};

renderApp(App);

/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(require('./App').default, document.getElementById('root'));
  });
}
/* eslint-disable global-require */
