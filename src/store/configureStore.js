import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import films from '../reducers/films';
import people from '../reducers/people';
import filmDetails from '../reducers/filmDetails';
import personDetails from '../reducers/personDetails';
import movieCredits from '../reducers/movieCredits';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const moviesApp = combineReducers({
  films,
  people,
  filmDetails,
  personDetails,
  movieCredits,
});

export default (initialState) => {
  const store = createStore(moviesApp, initialState, applyMiddleware(sagaMiddleware));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  sagaMiddleware.run(rootSaga);

  return store;
};

