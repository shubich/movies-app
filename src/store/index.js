import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import details from './modules/details';
import list from './modules/list';
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
