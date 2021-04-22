import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger/src';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    duration: true,
  });

  middlewares.push(logger);
}

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );
}
