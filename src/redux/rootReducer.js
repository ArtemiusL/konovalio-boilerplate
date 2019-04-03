import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import * as reducers from './ducks';

const { ...restReducers } = reducers;

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    ...restReducers,
  });

export default rootReducer;
