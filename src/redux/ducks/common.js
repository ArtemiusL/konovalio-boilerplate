import { createActions, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

export const DESKTOP = 'DESKTOP';
export const TABLET = 'TABLET';
export const MOBILE = 'MOBILE';

const initialState = {
  viewport: DESKTOP,
};

const actions = createActions(
  'CHANGE_VIEWPORT',
);
// $FixFlowMe
const reducer = handleActions(
  {
    [actions.changeViewport]: (state, { payload: { type, viewport } }) => ({
      ...state,
      viewport,
    }),
  },
  initialState,
);

const getState = state => state.modals;

const selectors = {
  getViewport: createSelector(
    [getState],
    s => s.viewport,
  ),
};

export { initialState as state, reducer, actions, selectors };
