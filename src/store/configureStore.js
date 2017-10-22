import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import search from '../reducers/search';
import films from '../reducers/films';
import people from '../reducers/people';
import filmDetails from '../reducers/filmDetails';

const moviesApp = combineReducers({
    search,
    films,
    people,
    filmDetails
});

const store = createStore(
    moviesApp,
    applyMiddleware(thunk, logger)
);

export default store;