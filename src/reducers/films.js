import {
    GET_FILMS_REQUEST,
    GET_FILMS_SUCCESS,
    GET_FILMS_FAILURE,
    SORT_FILMS
} from '../constants/Films';
import { movies } from '../data';

const getFilms = (props) => {
    // something important
    return movies;
}

const initialState = getFilms(null);

const films = (state = initialState, action) => {
    switch(action.type) {
        case GET_FILMS_REQUEST:
            return [...movies];
        case SORT_FILMS:
            return state;
        default:
            return state;
    }
}

export default films;