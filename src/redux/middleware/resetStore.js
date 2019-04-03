const resetStore = () => next => (reducer, initialState, enhancer) => {
  const enhanceReducer = (state, action) => {
    if (action.type === 'AUTH_LOGOUT') {
      sessionStorage.clear();
      localStorage.clear();
      // eslint-disable-next-line
      state = undefined;
    }
    return reducer(state, action);
  };
  return next(enhanceReducer, initialState, enhancer);
};

export default resetStore;
