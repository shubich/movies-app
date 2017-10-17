import {
    GET_FILMS_REQUEST,
    GET_FILMS_SUCCESS,
    GET_FILMS_FAILURE,
    SORT_FILMS
} from '../constants/Films';

const initialState = {
    results: [],
    fetching: false,
    error: ''
}

const films = (state = initialState, action) => {
    switch(action.type) {
        case GET_FILMS_REQUEST:
            return { results: [], fetching: true, error: '' };
        case GET_FILMS_SUCCESS:
            return { results: action.results, fetching: false, error: '' };
        case GET_FILMS_FAILURE:
            return { results: [], fetching: false, error: action.error };
        case SORT_FILMS:
            return state;
        default:
            return state;
    }
}

export default films;