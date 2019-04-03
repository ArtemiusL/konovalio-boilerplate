import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import sagasManager from 'utils/sagasManager';
import storage from 'redux-persist/lib/storage/session';
import { createBrowserHistory } from 'history';
import { createTracker } from 'redux-segment';
import rootReducer from './rootReducer';
import { resetStore } from './middleware';

const tracker = createTracker();
// HISTORY
export const history = createBrowserHistory();
// PERSIST STORE
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));
const sagaMiddleware = createSagaMiddleware();
const middleware = composeWithDevTools(
  applyMiddleware(
    thunk,
    sagaMiddleware,
    routerMiddleware(history),
    tracker,
  ),
  resetStore(),
);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);

export default () => {
  sagaMiddleware.run(sagasManager.getRootSaga());
  return { store, persistor, history };
};
