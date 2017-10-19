import {
    GET_FILMS_REQUEST,
    GET_FILMS_SUCCESS,
    GET_FILMS_FAILURE,
    GET_SIMILAR_FILMS_REQUEST,
    GET_SIMILAR_FILMS_SUCCESS,
    GET_SIMILAR_FILMS_FAILURE,
    SORT_FILMS
} from '../constants/Films';

import { sortFilms } from '../utils';

const initialState = {
    results: [],
    fetching: false,
    sort: '',
    error: ''
}

const films = (state = initialState, action) => {
    switch(action.type) {
        case GET_FILMS_REQUEST:
        case GET_SIMILAR_FILMS_REQUEST:
            return { results: [], fetching: true, error: '', sort: '' };
        case GET_FILMS_SUCCESS:
        case GET_SIMILAR_FILMS_SUCCESS:
            return { results: action.results, fetching: false, error: '', sort: '' };
        case GET_FILMS_FAILURE:
        case GET_SIMILAR_FILMS_FAILURE:
            return { results: [], fetching: false, error: action.error, sort: '' };
        case SORT_FILMS:
            return { ...state, results: sortFilms([...state.results], action.resultsFilter), sort: action.resultsFilter };
        default:
            return state;
    }
}

export default films;