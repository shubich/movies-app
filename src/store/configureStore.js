import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import films from '../reducers/films'

const moviesApp = combineReducers({
    films
});

const store = createStore(
    moviesApp,
    applyMiddleware(logger)
);

export default store;