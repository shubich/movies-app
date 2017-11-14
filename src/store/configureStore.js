import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
// import thunk from 'redux-thunk';
import search from '../reducers/search';
import films from '../reducers/films';
import people from '../reducers/people';
import filmDetails from '../reducers/filmDetails';
import personDetails from '../reducers/personDetails';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const moviesApp = combineReducers({
  search,
  films,
  people,
  filmDetails,
  personDetails,
});

export default (initialState) => {
  // const rootReducer = combineReducers(moviesApp);
  const store = createStore(moviesApp, initialState, applyMiddleware(sagaMiddleware));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  sagaMiddleware.run(rootSaga);

  return store;
};

// const store = createStore(
//   moviesApp,
//   applyMiddleware(thunk, logger),
// );

// export default store;
