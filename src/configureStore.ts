/* eslint-disable no-underscore-dangle */
import {
  createStore, applyMiddleware, compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

export default function configureStore() {
  const middlewares = [thunkMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];
  if (typeof window !== 'undefined') {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }
  return createStore(rootReducer, compose(...enhancers));
}
