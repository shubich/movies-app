import {
    GET_FILMS_BY_TITLE,
    GET_FILMS_BY_DIRECTOR,
    SORT_FILMS_BY_DATE,
    SORT_FILMS_BY_RATING    
} from '../constants/Films';

const films = (state, action) => {
    switch(action.type) {
        case GET_FILMS_BY_TITLE:
            return 1;
        case GET_FILMS_BY_TITLE:
            return 2;
        case SORT_FILMS_BY_DATE:
            return 3;
        case SORT_FILMS_BY_RATING:
            return 4;
    }
}

export default films;