import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import films from '../reducers/films';

const moviesApp = combineReducers({
    films
});

const store = createStore(
    moviesApp,
    applyMiddleware(thunk, logger)
);

export default store;