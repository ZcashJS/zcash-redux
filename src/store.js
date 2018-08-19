// @flow

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default (initialState: Object = {}) => {
  let middleware;
  let enhancer;

  if (
    process.env.NODE_ENV !== 'production'
    || process.env.NODE_ENV !== 'staging'
  ) {
    middleware = applyMiddleware(thunk);
    enhancer = compose(
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    );
  } else {
    middleware = applyMiddleware(thunk);
    enhancer = compose(middleware);
  }

  return createStore(rootReducer, initialState, enhancer);
};
