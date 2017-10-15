import {
    GET_FILMS,
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
        case GET_FILMS:
            return [...movies];
        case SORT_FILMS:
            return state;
        default:
            return state;
    }
}

export default films;