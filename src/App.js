import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

// THEMES
import { GlobalStyle } from 'styles';
// UTILS
import configureStore from 'redux/store';
// ROUTES
import Routes from './routes';
// STORE
const { store, persistor, history } = configureStore();

// EXPORTED APP
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <Routes />
          <GlobalStyle />
        </React.Fragment>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
