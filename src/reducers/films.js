import {
    GET_FILMS_REQUEST,
    GET_FILMS_SUCCESS,
    GET_FILMS_FAILURE,
    SORT_FILMS
} from '../constants/Films';
//import { movies } from '../data';

const initialState = {
    films: [],
    fetching: false,
    error: ''
}

const films = (state = initialState, action) => {
    switch(action.type) {
        case GET_FILMS_REQUEST:
            return { films: [], fetching: true, error: '' };
        case GET_FILMS_SUCCESS:
            return { films: action.films, fetching: false, error: '' };
        case GET_FILMS_FAILURE:
            return { films: [], fetching: false, error: action.error };
        case SORT_FILMS:
            return state;
        default:
            return state;
    }
}

export default films;