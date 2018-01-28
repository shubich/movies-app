import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import list from '../reducers/list';
import details from '../reducers/details';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const moviesApp = combineReducers({
  list,
  details,
});

export default (initialState) => {
  const store = createStore(moviesApp, initialState, applyMiddleware(sagaMiddleware));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  sagaMiddleware.run(rootSaga);

  return store;
};
