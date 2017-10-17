import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import films from '../reducers/films';
import filmDetails from '../reducers/filmDetails';

const moviesApp = combineReducers({
    films,
    filmDetails
});

const store = createStore(
    moviesApp,
    applyMiddleware(thunk, logger)
);

export default store;